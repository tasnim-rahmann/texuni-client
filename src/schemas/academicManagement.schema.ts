import { z } from "zod";

export const academicSemesterSchema = z.object({
    name: z.string({ error: "Please select a name!" }),
    year: z.string({ error: "Please select a year!" }),
    startMonth: z.string({ error: "Please select a start month!" }),
    endMonth: z.string({ error: "Please select a end month!" }),
});