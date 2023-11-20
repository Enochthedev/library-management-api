import * as z from 'zod';

const User = z.object({
  id: z.string().min(1),
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(10),
  address: z.string().optional(),
  status: z.string().optional(),
  available: z.boolean().default(true),
});

type User = z.infer<typeof User>;

export default  User ;
