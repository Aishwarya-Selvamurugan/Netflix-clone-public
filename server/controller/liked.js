import User from "../model/user.js";

export const getLikedMovies = async (req, res) => {
  try {
    // console.log(user + " user likes");
    const { email } = req.params;

    const user = await User.findOne({ email: email });
    // console.log(email + "server" + user);
    if (user) {
      // console.log(user + " user likes");
      return res.json({ msg: "success", movies: user.likedMovies });
    } else return res.json({ msg: "User with given email not found." });
    // return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error fetching movies. " + error.message });
  }
};

export const addToLikedMovies = async (req, res) => {
  try {
    console.log("added user");
    const { email, data } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const { _id, likedMovies } = user;
      const movieAlreadyLiked = likedMovies.find(({ id }) => id === data.id);
      if (!movieAlreadyLiked) {
        await User.findByIdAndUpdate(
          _id,
          {
            likedMovies: [...likedMovies, data],
          },
          { new: true }
        );
      } else return res.json({ msg: "Movie already added to the liked list." });
    } else await User.create({ email, likedMovies: [data] });
    return res.json({ msg: "Movie successfully added to liked list." });
  } catch (error) {
    return res.json({ msg: "Error adding movie to the liked list" });
  }
};

export const removeFromLikedMovies = async (req, res) => {
  try {
    console.log("This is from server");
    const { email, movieId } = req.body;
    const user = await User.findOne({ email });
    if (user) {
      const movies = user.likedMovies;
      const movieIndex = movies.findIndex(({ id }) => id === movieId);
      if (!movieIndex) {
        res.status(400).send({ msg: "Movie not found." });
      }
      movies.splice(movieIndex, 1);
      await User.findByIdAndUpdate(
        user._id,
        {
          likedMovies: movies,
        },
        { new: true }
      );
      return res.json({ msg: "Movie successfully removed.", movies });
    } else return res.json({ msg: "User with given email not found." });
  } catch (error) {
    return res.json({ msg: "Error removing movie to the liked list" });
  }
};
