export type BaseResponse = {
  timestamp: number;
  message: string;
  status: number;
};

export type ErrorResponse = BaseResponse & {
  error: {
    code: string;
    description: string;
  };
};

export type SuccessResponse<T> = BaseResponse & {
  metadata: T;
};

export type ApiResponse<T> = SuccessResponse<T> | ErrorResponse;
