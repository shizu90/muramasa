export interface Session {
    token: string,
    id: string
}

export default interface AuthType {
    auth: Session,
    setAuth: (...params: any) => void
}