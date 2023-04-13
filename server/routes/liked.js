import { Router } from "express";
import {
  getLikedMovies,
  addToLikedMovies,
  removeFromLikedMovies,
} from "../controller/liked.js";

const router = Router();

router.get("/liked/:email", getLikedMovies);
// router.get("/likeorNot/:email/:id", ifLikedMovie);
router.post("/add", addToLikedMovies);
router.put("/remove", removeFromLikedMovies);

export default router;
