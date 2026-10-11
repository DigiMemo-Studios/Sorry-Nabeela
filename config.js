// DigiMemo Configuration
// Edit this file to customize the content, styles, music, and layout of your interactive story!

const websiteData = {
  // Global Web App Settings
  title: "I'm Really Sorry... 🥺",
  subtitle: "A little message from my heart",
  songUrl: "music.mp3", // Local background music
  musicAutoplay: true,

  // Theme styling (Soft apologies pastel theme: lavender & blush pink)
  primaryColor: "#a29bfe", // Soft lavender
  secondaryColor: "#ff85a2", // Soft blush pink
  accentColor: "#ff7675", // Soft red

  // Choose default global character theme: "bunny", "bear", "kitten", "panda", "hamster"
  characterTheme: "panda",

  // Card background styling (can use glassmorphism gradients)
  cardGradient: "linear-gradient(135deg, rgba(255, 255, 255, 0.8), rgba(240, 240, 255, 0.85))",

  // Website flow pages
  // Each page will be rendered dynamically inside the story container.
  // Available expressions: "happy", "sad", "excited", "shy", "crying", "hugging", "blushing"
  // Types: "story" (standard message), "letter" (interactive envelope), "photos" (scrapbook), "question" (runaway NO button)
  pages: [
    {
      type: "story",
      character: "panda",
      expression: "sad",
      bubbleText: "Hi... 🥺",
      message: "Ashique, I know neither of us is perfect. We have our own struggles, our own fears, and sometimes we hurt each other without fully understanding how deeply it affects the other person. I know I have my flaws too. But beneath every argument, every question, and every moment when I seem upset, there is a heart that has always wanted to feel loved, understood, and safe with you. I don’t need a perfect husband. I don’t expect you to have all the answers or to know how to handle every emotion. I just want to feel that we’re in this together. I want to be the person you can open your heart to, the person you reach for when life feels heavy, and the person whose presence brings you peace rather than pressure.",
      buttonText: "What's this? 🥺"
    },
    {
      type: "story",
      character: "panda",
      expression: "crying",
      bubbleText: "I'm so sorry... 😭",
      message: "Sometimes, I miss you even when you’re right there. I miss the closeness I dreamt of having with you, the little reassurances, the effortless affection, and the feeling that we are choosing each other every day. I don’t want us to become two people who simply live beside each other while quietly missing what we could have been. And my love, I see you going through your own struggles too. I worry about you, especially while you’re recovering from your surgery. I wish I could take away your pain, kiss your forehead, hold you close, and remind you that you don’t have to be strong every single moment. I pray to Allah to heal you completely, ease your worries, protect your heart, and give you happiness that stays.",
      buttonText: "Please read this... ✉️"
    },
    {
      type: "letter",
      character: "panda",
      expression: "shy",
      bubbleText: "For you ✉️",
      message: "Please open this small envelope. I put my whole heart into writing this for you.",
      envelopeLabel: "Tap to read my  💖",
      letterContent: "I want to be there for you in your difficult days, not just the beautiful ones. I want to celebrate your happiness, support your dreams, laugh with you over silly things, and grow old with you. I want the ordinary days with you just as much as the extraordinary ones. But Ashique, I also want us to understand that love needs care. It needs honesty, effort, tenderness, and the courage to face the things that hurt instead of leaving them unspoken. I want us to learn how to understand each other better, even when we disagree. I want a marriage where neither of us has to keep guessing what the other feels. I’m not writing this to make you feel guilty or to ask you to become someone you’re not. I’m writing because there are things in my heart that I don’t always know how to say when we’re upset. And despite everything, I still want the love between us to have a chance to become something beautiful, healthy, and real. If there’s one thing I wish for us, it’s that one day we look back at this difficult chapter and realise that we learned how to love each other better—not just through words, but through the little things we do every day.",
      buttonText: "Our memories... 📸"
    },
    {
      type: "photos",
      character: "panda",
      expression: "hugging",
      bubbleText: "Our moments 📸",
      message: "You’re my Ashique. The man I have prayed for, dreamed with, and imagined so many tomorrows beside. I cannot promise that every day will be easy, but I hope we can both choose honesty, kindness, and genuine effort as we find our way forward.",
      photos: [
        {
          url: "images/photo1.jpg",
          caption: "Always in my heart 💕"
        },
        {
          url: "images/photo2.png",
          caption: "My favorite person ✨"
        },
        {
          url: "images/photo3.png",
          caption: "11:11 You are my wish 🌸"
        }
      ],
      buttonText: "Finally... 🥺"
    },
    {
      type: "question",
      character: "panda",
      expression: "shy",
      bubbleText: "Do you forgive me? 🥺",
      message: "May Allah soften our hearts towards each other, heal what has been hurting us, guide us towards what is best for us, and fill our marriage with  sincere love.I love you, Ashique. Not because our story has been perfect, but because what we have shared has meant so much to me.I don’t want us to simply stay together. I want us to find happiness in being together. With all the love in my heart,Your Minnath ❤️",
      yesButtonText: "Yes, I forgive you! 🥰",
      noButtonText: "No! 😤",
      noRunawayCount: 6, // Number of times the NO button runs away before becoming clickable
      noRunawayDialogues: [
        "Wait, please? 🥺",
        "I'm truly sorry baby... 💔",
        "Please don't give up on us... 🥺",
        "Give me one more chance? 🥺",
        "Please consider us once again... 🥺❤️",
        "Okay, last chance! 🥺"
      ],
      noClickSadResponse: "Fine, you clicked No... But I'm still going to keep trying to make it up to you and prove my love! 🥺❤️"
    }
  ],

  // Final Celebration/Ending Screen
  ending: {
    character: "panda",
    expression: "excited",
    bubbleText: "Yay! 🎉❤️",
    message: "Thank you for forgiving me and giving us another chance! You've made me the happiest person in the world. I promise to cherish you every single day! 💕",
    replayButtonText: "Replay ❤️",
    screenshotButtonText: "Save Memo 📸"
  }
};
