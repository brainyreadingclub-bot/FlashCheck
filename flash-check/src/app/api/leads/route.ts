import { NextResponse } from 'next/server'
import { createClient } from '@/lib/supabase/server'

interface LeadPayload {
  email: string
  source: string
  utm_source?: string | null
  utm_medium?: string | null
  utm_campaign?: string | null
  utm_term?: string | null
  utm_content?: string | null
}

export async function POST(request: Request) {
  try {
    const body: LeadPayload = await request.json()

    // Validate required fields
    if (!body.email || !body.source) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: '이메일과 소스는 필수 항목입니다.',
          },
        },
        { status: 400 }
      )
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'VALIDATION_ERROR',
            message: '올바른 이메일 형식을 입력해주세요.',
          },
        },
        { status: 400 }
      )
    }

    const supabase = await createClient()

    // Check for duplicate email
    const { data: existing } = await supabase
      .from('leads')
      .select('id')
      .eq('email', body.email.toLowerCase().trim())
      .single()

    if (existing) {
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'LEAD_ALREADY_EXISTS',
            message: '이미 등록된 이메일입니다.',
          },
        },
        { status: 409 }
      )
    }

    // Insert new lead
    const { data, error } = await supabase
      .from('leads')
      .insert({
        email: body.email.toLowerCase().trim(),
        source: body.source,
        utm_source: body.utm_source || null,
        utm_medium: body.utm_medium || null,
        utm_campaign: body.utm_campaign || null,
        utm_term: body.utm_term || null,
        utm_content: body.utm_content || null,
      })
      .select()
      .single()

    if (error) {
      // Handle unique constraint violation
      if (error.code === '23505') {
        return NextResponse.json(
          {
            success: false,
            error: {
              code: 'LEAD_ALREADY_EXISTS',
              message: '이미 등록된 이메일입니다.',
            },
          },
          { status: 409 }
        )
      }

      console.error('Supabase error:', error)
      return NextResponse.json(
        {
          success: false,
          error: {
            code: 'DATABASE_ERROR',
            message: '데이터베이스 오류가 발생했습니다.',
          },
        },
        { status: 500 }
      )
    }

    return NextResponse.json(
      {
        success: true,
        data,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'INTERNAL_ERROR',
          message: '서버 오류가 발생했습니다.',
        },
      },
      { status: 500 }
    )
  }
}
