import * as z from 'zod';

export const loginvalidation = z.object({
    email: z.string()
            .nonempty('Email address is required')
            .email('Email should valid')
            .min(2,'Email have atleast minuium 2 character'),
    password : z.string()
                .nonempty('Password is required')
                .min(8,'Password have atleast min 8 character')
                .max(20,'Password have atleast max 20 character'),
});

export const registervalidation = z.object({
        username: z.string()
                    .nonempty('Username address is required')
                    .regex(/^[A-Za-z0-9]+$/,'Name should only contain letters and spaces')
                    .min(2)
                    .max(10),
        email: z.string()
                .nonempty('Email address is required')
                .email('Email should valid')
                .min(2,'Email have atleast minuium 2 character'),
        password : z.string()
                    .nonempty('Password is required')
                    .min(8,'Password have atleast min 8 character')
                    .max(20,'Password have atleast max 20 character'),
});

export type loginFormValidation = z.infer<typeof loginvalidation>;
export type registerFormvalidation = z.infer<typeof registervalidation>;