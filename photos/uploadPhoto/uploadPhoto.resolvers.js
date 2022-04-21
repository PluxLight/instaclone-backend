import client from "../../client";
import { protectedResolver } from "../../users/users.utils";

export default {
  Mutation: {
    uploadPhoto: protectedResolver(
      async (_, { file, caption }, { loggedInUser }) => {
        let hashtagObj = [];
        if (caption) {
            // const hashtags = caption.match(/#[\w]+/g);
            const hashtags = caption.match(/#[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|\w]+/g);
            hashtagObj = hashtags.map((hashtag) => ({
                where: { hashtag },
                create: { hashtag },
              }));
            // console.log(hashtags)
          /// parse caption
          // get or create Hashtags
        }
        // save the photo WITH the parsed hashtags
        // add the photo to the hashtags
        return client.photo.create({
            data: {
              file,
              caption,
              user: {
                connect: {
                  id: loggedInUser.id,
                },
              },
              ...(hashtagObj.length > 0 && {
                hashtags: {
                  connectOrCreate: hashtagObj,
                },
              }),
            },
          });
      }
    ),
  },
};