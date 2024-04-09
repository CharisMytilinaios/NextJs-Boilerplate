import { z } from 'zod';

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  mobile: z.boolean().default(false).optional(),
  checkboxesItems: z.array(z.string()).refine((value) => {
    return value.some((item) => { return item; });
  }, {
    message: 'You have to select at least one item.',
  }),
  dob: z.date({
    required_error: 'A date of birth is required.',
  }),
  radioItems: z.enum([ 'all', 'mentions', 'none' ], {
    required_error: 'You need to select a notification type.',
  }),
  email: z
    .string({
      required_error: 'Please select an email to display.',
    })
    .email(),
  marketing_emails: z.boolean().default(false).optional(),
  security_emails: z.boolean(),
  bio: z
    .string()
    .min(10, {
      message: 'Bio must be at least 10 characters.',
    })
    .max(160, {
      message: 'Bio must not be longer than 30 characters.',
    }),
});

export default formSchema;
