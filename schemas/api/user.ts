import { z } from 'zod';

const userCore = {
  email: z
    .string({
      required_error: 'Email is a required field',
      invalid_type_error: 'Email must be a string',
    })
    .email({ message: 'Invalid email address' }),
  username: z
    .string({
      required_error: 'Email is a required field',
      invalid_type_error: 'Email must be a string',
    })
    .min(2, { message: 'Username is too short (min 2 characters)' })
    .max(21, { message: 'Username is too long (max 21 characters)' }),
};

export const userSettingsObject = 
  z.object({
    stats: z.object({
      lengthUnit: z.enum(['feet', 'meters', 'squares']),
      heightUnit: z.enum(['feet', 'meters']),
    }).optional(),
    language: z.enum(['en', 'it']).optional(),
    statBlocks: z.enum((['5e', '5.5e'])).optional(),
  }).nullable();

export const sPostUserBody = z.object({
  ...userCore,
  password: z
    .string({
      required_error: 'Password is a required field',
      invalid_type_error: 'Password must be a string',
    })
    .min(8, { message: 'Password is too short (min 8 character' }),
});

export const sPostUserResponse = z.object({
  ...userCore,
  id: z.number(),
});

export const sActivateUserBody = z.object({
  token: z.string(),
});

export const sResetPasswordBody = z.object({
  token: z.string(),
  password: z.string().min(8),
});

export const sReactivateUserBody = z.object({
  email: z.string().email(),
});

export const sLoginBody = z.object({
  email: z
    .string({
      required_error: 'Email is a required field',
      invalid_type_error: 'Email must be a string',
    })
    .email({ message: 'Invalid email address' }),
  password: z.string(),
});

export const sLoginResponse = z.object({
  accessToken: z.string(),
});

export const sGetUserResponse = z.object({
  id: z.number(),
  ...userCore,
  level: z.number(),
  created: z.string().datetime(),
  publishsuspension: z.string().datetime(),
  avatar: z.string(),
  settings: userSettingsObject,
});

export const sPutUserBody = z.object({
  username: z.string().min(2).max(21),
  avatar: z.string(),
});
