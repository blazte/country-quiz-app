export class FetchError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'FetchError'
    }
}

export class ValidationError extends Error {
    constructor(message: string) {
        super(message)
        this.name = 'ValidationError'
    }
}
