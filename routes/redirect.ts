/*
 * Copyright (c) 2014-2026 Bjoern Kimminich & the OWASP Juice Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import { type Request, type Response, type NextFunction } from 'express'

export function performRedirect () {
  return ({ query }: Request, res: Response, next: NextFunction) => {
    const toUrl: string = typeof query.to === 'string' ? query.to : ''

    
    const safeTarget = toUrl.startsWith('/') && !toUrl.startsWith('//') ? toUrl : '/'

    res.redirect(safeTarget)
  }
}
