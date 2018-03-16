export class BasePaginatedResponse {
    totalCount: number;
}

export class PaginatedResponse<T> extends BasePaginatedResponse {
    data: T[];
}