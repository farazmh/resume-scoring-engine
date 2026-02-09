import express from "express";
import { scoreResume } from "./engine";
import { ResumeProfile } from "./types";

const app = express();
app.use(express.json());

app.post("/score", (req: express.Request, res: express.Response) => {
  const { profile, resumeText, requiredSkills } = req.body as {
    profile: ResumeProfile;
    resumeText: string;
    requiredSkills: string[];
  };

  const result = scoreResume(profile, resumeText, requiredSkills);

  res.json(result);
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Scoring API running on port ${PORT}`);
});
