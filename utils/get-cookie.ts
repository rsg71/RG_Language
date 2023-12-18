export const credentials = {
    username: 'rg',
    password: '123'
}

export const testUser = {
    _id: '62bd0ef66eca0c6370c96046'
}


/**
 * Format cookie
 * @param cookie 
 * @returns 
 */
export function formatCookie(cookie: string): string {
    const formattedCookie = cookie.replace('; Path=/; HttpOnly', '');
    return formattedCookie;
}


