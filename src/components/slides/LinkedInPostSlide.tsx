import { motion } from "framer-motion";

const LinkedInPostSlide = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-slide-bg p-12 pb-20">
      {/* Title */}
      <motion.h1 
        className="slide-heading-lg text-foreground mb-6 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        What many thought impossible, now possible
      </motion.h1>

      {/* LinkedIn Post Card */}
      <motion.div
        className="bg-white rounded-lg shadow-xl max-w-lg w-full overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {/* Post Header */}
        <div className="p-3 flex items-start justify-between">
          <div className="flex items-center gap-2">
            {/* Profile Picture */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-red-500 flex items-center justify-center text-white font-bold text-sm">
              M
            </div>
            <div>
              <div className="flex items-center gap-1">
                <span className="font-semibold text-gray-900 text-sm">Michael T.</span>
                <svg className="w-3 h-3 text-[#0a66c2]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                </svg>
              </div>
              <p className="text-gray-600 text-xs">Building Cursor</p>
            </div>
          </div>
          <button className="text-[#0a66c2] font-semibold text-xs flex items-center gap-1 hover:bg-blue-50 px-2 py-1 rounded">
            + Follow
          </button>
        </div>

        {/* Post Text */}
        <div className="px-3 pb-2">
          <p className="text-gray-900 text-sm">Watch Cursor build a 3M+ line browser in a week</p>
        </div>

        {/* Video Embed */}
        <div className="w-full aspect-video bg-black">
          <iframe
            src="https://www.youtube.com/embed/ycPauaZo0Ss?autoplay=1&mute=1&start=2&controls=1&loop=1"
            title="Cursor building browser"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Post Actions */}
        <div className="p-2 flex items-center justify-around border-t border-gray-200">
          <button className="flex items-center gap-1 text-gray-600 text-xs hover:bg-gray-100 px-3 py-1.5 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
            </svg>
            Like
          </button>
          <button className="flex items-center gap-1 text-gray-600 text-xs hover:bg-gray-100 px-3 py-1.5 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
            Comment
          </button>
          <button className="flex items-center gap-1 text-gray-600 text-xs hover:bg-gray-100 px-3 py-1.5 rounded">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Repost
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default LinkedInPostSlide;
