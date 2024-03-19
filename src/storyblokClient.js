   // src/storyblokClient.js
   import StoryblokClient from 'storyblok-js-client';

   const storyblokClient = new StoryblokClient({
     accessToken: "fES89FuaVkjCLgkatFgurwtt",
     cache: {
       clear: 'auto',
       type: 'memory'
     }
   });

   export default storyblokClient;