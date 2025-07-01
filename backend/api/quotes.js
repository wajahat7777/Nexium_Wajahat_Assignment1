// Vercel Serverless Function for /api/quotes

const quotes = [
    // Motivation (3 quotes)
    { text: "Believe you can and you're halfway there.", topic: "motivation" },
    { text: "Your limitation—it's only your imagination.", topic: "motivation" },
    { text: "Push yourself, because no one else is going to do it for you.", topic: "motivation" },
  
    // Success (3 quotes)
    { text: "Great things never come from comfort zones.", topic: "success" },
    { text: "Dream it. Wish it. Do it.", topic: "success" },
    { text: "Success doesn't just find you. You have to go out and get it.", topic: "success" },
  
    // Hard Work (3 quotes)
    { text: "The harder you work for something, the greater you'll feel when you achieve it.", topic: "hard work" },
    { text: "Don't stop when you're tired. Stop when you're done.", topic: "hard work" },
    { text: "Wake up with determination. Go to bed with satisfaction.", topic: "hard work" },
  
    // Determination (3 quotes)
    { text: "The difference between the impossible and the possible lies in a person's determination.", topic: "determination" },
    { text: "Obstacles are those frightful things you see when you take your eyes off your goal.", topic: "determination" },
    { text: "It does not matter how slowly you go as long as you do not stop.", topic: "determination" },
  
    // Courage (3 quotes)
    { text: "You get in life what you have the courage to ask for.", topic: "courage" },
    { text: "Courage doesn't always roar. Sometimes it's the quiet voice at the end of the day saying, 'I will try again tomorrow.'", topic: "courage" },
    { text: "Fear is a reaction. Courage is a decision.", topic: "courage" },
  
    // Love (3 quotes)
    { text: "Love recognizes no barriers. It jumps hurdles, leaps fences, penetrates walls to arrive at its destination full of hope.", topic: "love" },
    { text: "The best thing to hold onto in life is each other.", topic: "love" },
    { text: "Love is not about how much you say 'I love you,' but how much you prove it.", topic: "love" },
  
    // Happiness (3 quotes)
    { text: "Happiness is not something ready-made. It comes from your own actions.", topic: "happiness" },
    { text: "The purpose of our lives is to be happy.", topic: "happiness" },
    { text: "Happiness depends upon ourselves.", topic: "happiness" },
  
    // Friendship (3 quotes)
    { text: "A friend is someone who knows all about you and still loves you.", topic: "friendship" },
    { text: "Friendship is the only cement that will ever hold the world together.", topic: "friendship" },
    { text: "True friends are never apart, maybe in distance but never in heart.", topic: "friendship" },
  
    // Wisdom (3 quotes)
    { text: "The only true wisdom is in knowing you know nothing.", topic: "wisdom" },
    { text: "Turn your wounds into wisdom.", topic: "wisdom" },
    { text: "Knowledge speaks, but wisdom listens.", topic: "wisdom" },
  
    // Perseverance (3 quotes)
    { text: "Perseverance is not a long race; it is many short races one after the other.", topic: "perseverance" },
    { text: "Success is not the absence of obstacles, but the courage to push through them.", topic: "perseverance" },
    { text: "Fall seven times, stand up eight.", topic: "perseverance" },
  
    // Leadership (3 quotes)
    { text: "A leader is one who knows the way, goes the way, and shows the way.", topic: "leadership" },
    { text: "Leadership is not about being in charge. It is about taking care of those in your charge.", topic: "leadership" },
    { text: "The function of leadership is to produce more leaders, not more followers.", topic: "leadership" },
  
    // Creativity (3 quotes)
    { text: "Creativity is intelligence having fun.", topic: "creativity" },
    { text: "You can't use up creativity. The more you use, the more you have.", topic: "creativity" },
    { text: "To practice any art, no matter how well or badly, is a way to make your soul grow.", topic: "creativity" },
  
    // Hope (3 quotes)
    { text: "Hope is the thing with feathers that perches in the soul.", topic: "hope" },
    { text: "Once you choose hope, anything's possible.", topic: "hope" },
    { text: "We must accept finite disappointment, but never lose infinite hope.", topic: "hope" },
  
    // Resilience (3 quotes)
    { text: "The oak fought the wind and was broken, the willow bent when it must and survived.", topic: "resilience" },
    { text: "Resilience is knowing that you are the only one that has the power to pick yourself up.", topic: "resilience" },
    { text: "You may have to fight a battle more than once to win it.", topic: "resilience" },
  
    // Kindness (3 quotes)
    { text: "No act of kindness, no matter how small, is ever wasted.", topic: "kindness" },
    { text: "Kindness is a language which the deaf can hear and the blind can see.", topic: "kindness" },
    { text: "A warm smile is the universal language of kindness.", topic: "kindness" },
  
    // Ambition (3 quotes)
    { text: "Ambition is the path to success. Persistence is the vehicle you arrive in.", topic: "ambition" },
    { text: "Keep your eyes on the stars, and your feet on the ground.", topic: "ambition" },
    { text: "Big results require big ambitions.", topic: "ambition" },
  
    // Gratitude (3 quotes)
    { text: "Gratitude turns what we have into enough.", topic: "gratitude" },
    { text: "Acknowledging the good that you already have in your life is the foundation for all abundance.", topic: "gratitude" },
    { text: "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.", topic: "gratitude" },
  
    // Confidence (3 quotes)
    { text: "Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle.", topic: "confidence" },
    { text: "Confidence is not 'they will like me.' Confidence is 'I'll be fine if they don't.'", topic: "confidence" },
    { text: "You gain strength, courage, and confidence by every experience in which you really stop to look fear in the face.", topic: "confidence" },
  
    // Teamwork (3 quotes)
    { text: "Alone we can do so little; together we can do so much.", topic: "teamwork" },
    { text: "Teamwork makes the dream work.", topic: "teamwork" },
    { text: "Coming together is a beginning. Keeping together is progress. Working together is success.", topic: "teamwork" },
  
    // Growth (3 quotes)
    { text: "We don't grow when things are easy; we grow when we face challenges.", topic: "growth" },
    { text: "The only way to grow is to step out of your comfort zone.", topic: "growth" },
    { text: "Personal growth is not a matter of learning new information but of unlearning old limits.", topic: "growth" },
  
    // Patience (3 quotes)
    { text: "Patience is not the ability to wait, but the ability to keep a good attitude while waiting.", topic: "patience" },
    { text: "Great works are performed not by strength but by perseverance and patience.", topic: "patience" },
    { text: "Patience is bitter, but its fruit is sweet.", topic: "patience" },
  
    // Innovation (3 quotes)
    { text: "Innovation distinguishes between a leader and a follower.", topic: "innovation" },
    { text: "The best way to predict the future is to create it.", topic: "innovation" },
    { text: "Ideas are easy. Execution is everything.", topic: "innovation" },
  
    // Integrity (3 quotes)
    { text: "Integrity is doing the right thing, even when no one is watching.", topic: "integrity" },
    { text: "Honesty is the first chapter in the book of wisdom.", topic: "integrity" },
    { text: "Real integrity is doing the right thing, knowing that nobody's going to know whether you did it or not.", topic: "integrity" },
  
    // Optimism (3 quotes)
    { text: "Keep your face to the sunshine and you cannot see a shadow.", topic: "optimism" },
    { text: "Optimism is the faith that leads to achievement.", topic: "optimism" },
    { text: "The pessimist sees difficulty in every opportunity. The optimist sees opportunity in every difficulty.", topic: "optimism" },
  
    // Faith (3 quotes)
    { text: "Faith is taking the first step even when you don't see the whole staircase.", topic: "faith" },
    { text: "Faith is the strength by which a shattered world shall emerge into the light.", topic: "faith" },
    { text: "Faith is to believe what you do not see; the reward of this faith is to see what you believe.", topic: "faith" },
  
    // Adventure (3 quotes)
    { text: "Life is either a daring adventure or nothing at all.", topic: "adventure" },
    { text: "The biggest adventure you can take is to live the life of your dreams.", topic: "adventure" },
    { text: "Adventure is worthwhile in itself.", topic: "adventure" },
  
    // Balance (3 quotes)
    { text: "Balance is not something you find, it's something you create.", topic: "balance" },
    { text: "Life is a balance of holding on and letting go.", topic: "balance" },
    { text: "The best and safest thing is to keep a balance in your life.", topic: "balance" },
  
    // Compassion (3 quotes)
    { text: "Compassion is the basis of morality.", topic: "compassion" },
    { text: "If you want others to be happy, practice compassion. If you want to be happy, practice compassion.", topic: "compassion" },
    { text: "Compassion is the keen awareness of the interdependence of all things.", topic: "compassion" },
  
    // Dreams (3 quotes)
    { text: "All our dreams can come true, if we have the courage to pursue them.", topic: "dreams" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", topic: "dreams" },
    { text: "Dream big, work hard, stay focused, and surround yourself with good people.", topic: "dreams" },
  
    // Freedom (3 quotes)
    { text: "Freedom is nothing but a chance to be better.", topic: "freedom" },
    { text: "The price of freedom is eternal vigilance.", topic: "freedom" },
    { text: "Freedom lies in being bold.", topic: "freedom" },
  
    // Trust (3 quotes)
    { text: "Trust is the glue of life. It's the most essential ingredient in effective communication.", topic: "trust" },
    { text: "To be trusted is a greater compliment than being loved.", topic: "trust" },
    { text: "Trust yourself. You know more than you think you do.", topic: "trust" },
  
    // Vision (3 quotes)
    { text: "The only thing worse than being blind is having sight but no vision.", topic: "vision" },
    { text: "Vision without action is a daydream. Action without vision is a nightmare.", topic: "vision" },
    { text: "A clear vision, backed by definite plans, gives you a tremendous feeling of confidence and personal power.", topic: "vision" },
  
    // Empathy (3 quotes)
    { text: "Empathy is seeing with the eyes of another, listening with the ears of another, and feeling with the heart of another.", topic: "empathy" },
    { text: "Empathy is about finding echoes of another person in yourself.", topic: "empathy" },
    { text: "We need empathy, we need the eyes that see beyond the surface.", topic: "empathy" },
  
    // Change (3 quotes)
    { text: "The only way to make sense out of change is to plunge into it, move with it, and join the dance.", topic: "change" },
    { text: "Change is the law of life. And those who look only to the past or present are certain to miss the future.", topic: "change" },
    { text: "You must be the change you wish to see in the world.", topic: "change" },
  
    // Learning (3 quotes)
    { text: "The beautiful thing about learning is that nobody can take it away from you.", topic: "learning" },
    { text: "Live as if you were to die tomorrow. Learn as if you were to live forever.", topic: "learning" },
    { text: "Learning is not attained by chance, it must be sought for with ardor and attended to with diligence.", topic: "learning" },
  
    // Passion (3 quotes)
    { text: "Passion is energy. Feel the power that comes from focusing on what excites you.", topic: "passion" },
    { text: "Follow your passion, it will lead you to your purpose.", topic: "passion" },
    { text: "Nothing great in the world has ever been accomplished without passion.", topic: "passion" },
  
    // Unity (3 quotes)
    { text: "We are only as strong as we are united, as weak as we are divided.", topic: "unity" },
    { text: "Unity is strength... when there is teamwork and collaboration, wonderful things can be achieved.", topic: "unity" },
    { text: "In union there is strength.", topic: "unity" },
  
    // Inspiration (3 quotes)
    { text: "You are never too old to set another goal or to dream a new dream.", topic: "inspiration" },
    { text: "The best way to get started is to quit talking and begin doing.", topic: "inspiration" },
    { text: "What you do today can improve all your tomorrows.", topic: "inspiration" },
  
    // Honesty (3 quotes)
    { text: "Honesty is the best policy.", topic: "honesty" },
    { text: "To be honest is to be real.", topic: "honesty" },
    { text: "Honesty is more than not lying. It is truth telling, truth speaking, truth living, and truth loving.", topic: "honesty" },
  
    // Strength (3 quotes)
    { text: "Strength does not come from physical capacity. It comes from an indomitable will.", topic: "strength" },
    { text: "You never know how strong you are until being strong is your only choice.", topic: "strength" },
    { text: "Strength is the product of struggle; you must do what others don't to achieve what others won't.", topic: "strength" },
  
    // Peace (3 quotes)
    { text: "Peace begins with a smile.", topic: "peace" },
    { text: "When the power of love overcomes the love of power, the world will know peace.", topic: "peace" },
    { text: "Peace is not absence of conflict, it is the ability to handle conflict by peaceful means.", topic: "peace" },
  
    // Purpose (3 quotes)
    { text: "The purpose of life is a life of purpose.", topic: "purpose" },
    { text: "Your purpose in life is to find your purpose and give your whole heart and soul to it.", topic: "purpose" },
    { text: "People who use time wisely spend it on activities that advance their overall purpose in life.", topic: "purpose" },
  
    // Opportunity (3 quotes)
    { text: "Opportunities don't happen. You create them.", topic: "opportunity" },
    { text: "In the middle of difficulty lies opportunity.", topic: "opportunity" },
    { text: "A wise man will make more opportunities than he finds.", topic: "opportunity" },
  
    // Authenticity (3 quotes)
    { text: "Be yourself; everyone else is already taken.", topic: "authenticity" },
    { text: "Authenticity is the daily practice of letting go of who we think we're supposed to be and embracing who we are.", topic: "authenticity" },
    { text: "To be authentic is to be at peace with your imperfections.", topic: "authenticity" },
  
    // Joy (3 quotes)
    { text: "Find joy in everything you choose to do.", topic: "joy" },
    { text: "Joy does not simply happen to us. We have to choose joy and keep choosing it every day.", topic: "joy" },
    { text: "The joy we feel has little to do with the circumstances of our lives and everything to do with the focus of our lives.", topic: "joy" },
  
    // Focus (3 quotes)
    { text: "Stay focused, go after your dreams and keep moving toward your goals.", topic: "focus" },
    { text: "The successful warrior is the average man, with laser-like focus.", topic: "focus" },
    { text: "Focus on the possibilities for success, not on the potential for failure.", topic: "focus" },
  
    // Respect (3 quotes)
    { text: "Respect is a two-way street; if you want to get it, you've got to give it.", topic: "respect" },
    { text: "Treat people the way you want to be treated.", topic: "respect" },
    { text: "Respect for ourselves guides our morals; respect for others guides our manners.", topic: "respect" },
  
    // Adventure (3 quotes)
    { text: "Life is an adventure, dare it.", topic: "adventure" },
    { text: "Adventure awaits those who dare to explore.", topic: "adventure" },
    { text: "The real adventure is in the journey, not the destination.", topic: "adventure" },
  
    // Generosity (3 quotes)
    { text: "No one has ever become poor by giving.", topic: "generosity" },
    { text: "Generosity is giving more than you can, and pride is taking less than you need.", topic: "generosity" },
    { text: "The value of a man resides in what he gives and not in what he is capable of receiving.", topic: "generosity" },
  
    // Self-Belief (3 quotes)
    { text: "Believe in yourself, and the rest will fall into place.", topic: "self-belief" },
    { text: "You are braver than you believe, stronger than you seem, and smarter than you think.", topic: "self-belief" },
    { text: "Self-belief is the foundation of all great achievements.", topic: "self-belief" },
  
    // Mindfulness (3 quotes)
    { text: "The present moment is filled with joy and happiness. If you are attentive, you will see it.", topic: "mindfulness" },
    { text: "Mindfulness is a way of befriending ourselves and our experiences.", topic: "mindfulness" },
    { text: "In today's rush, we all think too much—seek too much—want too much—and forget about the joy of just being.", topic: "mindfulness" },
  
    // Discipline (3 quotes)
    { text: "Discipline is the bridge between goals and accomplishment.", topic: "discipline" },
    { text: "With self-discipline, almost anything is possible.", topic: "discipline" },
    { text: "Discipline is doing what you know needs to be done, even if you don't want to do it.", topic: "discipline" },
  
    // Humility (3 quotes)
    { text: "Humility is not thinking less of yourself, but thinking of yourself less.", topic: "humility" },
    { text: "True humility is staying teachable, regardless of how much you already know.", topic: "humility" },
    { text: "Humility is the solid foundation of all virtues.", topic: "humility" },
  
    // Acceptance (3 quotes)
    { text: "Acceptance doesn't mean resignation; it means understanding that something is what it is and that there's got to be a way through it.", topic: "acceptance" },
    { text: "The first step toward change is awareness. The second step is acceptance.", topic: "acceptance" },
    { text: "Acceptance is the key to everything; it allows you to move forward.", topic: "acceptance" },
  
    // Curiosity (3 quotes)
    { text: "Curiosity is the wick in the candle of learning.", topic: "curiosity" },
    { text: "The important thing is not to stop questioning. Curiosity has its own reason for existing.", topic: "curiosity" },
    { text: "Curiosity is the engine of achievement.", topic: "curiosity" },
  
    // Forgiveness (3 quotes)
    { text: "Forgiveness is not an occasional act; it is a constant attitude.", topic: "forgiveness" },
    { text: "To forgive is to set a prisoner free and discover that the prisoner was you.", topic: "forgiveness" },
    { text: "Forgiveness does not change the past, but it does enlarge the future.", topic: "forgiveness" },
  
    // Bravery (3 quotes)
    { text: "Bravery is not the absence of fear, but action in the face of fear.", topic: "bravery" },
    { text: "You can't be brave if you've only had wonderful things happen to you.", topic: "bravery" },
    { text: "Bravery is being the only one who knows you're afraid.", topic: "bravery" },
  
    // Clarity (3 quotes)
    { text: "Clarity comes from action, not thought.", topic: "clarity" },
    { text: "A clear mind creates a clear path.", topic: "clarity" },
    { text: "Clarity is the key to effective leadership.", topic: "clarity" },
  
    // Commitment (3 quotes)
    { text: "Commitment is what transforms a promise into reality.", topic: "commitment" },
    { text: "The quality of a person's life is in direct proportion to their commitment to excellence.", topic: "commitment" },
    { text: "Without commitment, you cannot have depth in anything, whether it's a relationship, a business, or a hobby.", topic: "commitment" },
  
    // Endurance (3 quotes)
    { text: "Endurance is not just the ability to bear a hard thing, but to turn it into glory.", topic: "endurance" },
    { text: "The race is not always to the swift, but to those who keep on running.", topic: "endurance" },
    { text: "Endurance is the price you pay for success.", topic: "endurance" },
  
    // Simplicity (3 quotes)
    { text: "Simplicity is the ultimate sophistication.", topic: "simplicity" },
    { text: "The art of simplicity is a puzzle of complexity.", topic: "simplicity" },
    { text: "Simplicity boils down to two steps: Identify the essential. Eliminate the rest.", topic: "simplicity" },
  
    // Trustworthiness (3 quotes)
    { text: "Trustworthiness is earned through actions, not words.", topic: "trustworthiness" },
    { text: "To be trusted is a greater achievement than to be loved.", topic: "trustworthiness" },
    { text: "Trust is built with consistency.", topic: "trustworthiness" },
  
    // Positivity (3 quotes)
    { text: "A positive attitude causes a chain reaction of positive thoughts, events, and outcomes.", topic: "positivity" },
    { text: "Keep your face always toward the sunshine, and shadows will fall behind you.", topic: "positivity" },
    { text: "Positivity is a choice that becomes a lifestyle.", topic: "positivity" },
  
    // Self-Reflection (3 quotes)
    { text: "The unexamined life is not worth living.", topic: "self-reflection" },
    { text: "Self-reflection is the school of wisdom.", topic: "self-reflection" },
    { text: "To know thyself is the beginning of wisdom.", topic: "self-reflection" },
  
    // Adaptability (3 quotes)
    { text: "The art of life lies in a constant readjustment to our surroundings.", topic: "adaptability" },
    { text: "Adaptability is about the powerful difference between adapting to cope and adapting to win.", topic: "adaptability" },
    { text: "It is not the strongest of the species that survives, but the most adaptable.", topic: "adaptability" },
  
    // Loyalty (3 quotes)
    { text: "Loyalty does not demand perfection, but it does require honesty.", topic: "loyalty" },
    { text: "Loyalty is the strongest glue that holds relationships together.", topic: "loyalty" },
    { text: "Loyalty means I am down with you whether you are wrong or right, but I will tell you when you are wrong.", topic: "loyalty" },
  
    // Exploration (3 quotes)
    { text: "The real voyage of discovery consists not in seeking new landscapes, but in having new eyes.", topic: "exploration" },
    { text: "Not all those who wander are lost.", topic: "exploration" },
    { text: "Life is an exploration, and every day is a new adventure.", topic: "exploration" },
  
    // Balance (3 quotes)
    { text: "Balance is the key to everything. What we do, think, say, eat, feel, they all require awareness.", topic: "balance" },
    { text: "A balanced life is a fulfilled life.", topic: "balance" },
    { text: "Balance is not better time management, but better boundary management.", topic: "balance" },
  
    // Determination (3 quotes)
    { text: "Determination is the wake-up call to the human will.", topic: "determination" },
    { text: "A dream doesn't become reality through magic; it takes sweat, determination, and hard work.", topic: "determination" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", topic: "determination" },
  
    // Courage (3 quotes)
    { text: "Courage is resistance to fear, mastery of fear—not absence of fear.", topic: "courage" },
    { text: "It takes courage to grow up and become who you really are.", topic: "courage" },
    { text: "Courage is the power to let go of the familiar.", topic: "courage" },
  
    // Gratitude (3 quotes)
    { text: "Gratitude is not only the greatest of virtues but the parent of all others.", topic: "gratitude" },
    { text: "When you are grateful, fear disappears, and abundance appears.", topic: "gratitude" },
    { text: "Gratitude is the fairest blossom which springs from the soul.", topic: "gratitude" },
  
    // Hope (3 quotes)
    { text: "Hope is being able to see that there is light despite all of the darkness.", topic: "hope" },
    { text: "Hope is a waking dream.", topic: "hope" },
    { text: "Hope is the only thing stronger than fear.", topic: "hope" },
  
    // Success (3 quotes)
    { text: "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome.", topic: "success" },
    { text: "The only place where success comes before work is in the dictionary.", topic: "success" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", topic: "success" },
  
    // Love (3 quotes)
    { text: "Love is the only force capable of transforming an enemy into a friend.", topic: "love" },
    { text: "To love and be loved is to feel the sun from both sides.", topic: "love" },
    { text: "Love does not consist in gazing at each other, but in looking outward together in the same direction.", topic: "love" },
  
    // Happiness (3 quotes)
    { text: "Happiness is not a goal; it is a by-product.", topic: "happiness" },
    { text: "The happiest people don't have the best of everything, they make the best of everything.", topic: "happiness" },
    { text: "Happiness is when what you think, what you say, and what you do are in harmony.", topic: "happiness" },
  
    // Wisdom (3 quotes)
    { text: "Wisdom is not a product of schooling but of the lifelong attempt to acquire it.", topic: "wisdom" },
    { text: "The wise man does at once what the fool does finally.", topic: "wisdom" },
    { text: "Wisdom begins in wonder.", topic: "wisdom" },
  
    // Resilience (3 quotes)
    { text: "Resilience is accepting your new reality, even if it's less good than the one you had before.", topic: "resilience" },
    { text: "The human capacity for burden is like bamboo—far more flexible than you'd ever believe at first glance.", topic: "resilience" },
    { text: "Resilience is not about how you endure, but how you come back stronger.", topic: "resilience" },
  
    // Kindness (3 quotes)
    { text: "Kindness is the sunshine in which virtue grows.", topic: "kindness" },
    { text: "Kind words can be short and easy to speak, but their echoes are truly endless.", topic: "kindness" },
    { text: "Kindness is the golden chain by which society is bound together.", topic: "kindness" },
  
    // Leadership (3 quotes)
    { text: "A good leader takes a little more than his share of the blame, a little less than his share of the credit.", topic: "leadership" },
    { text: "Leadership is the capacity to translate vision into reality.", topic: "leadership" },
    { text: "The greatest leader is not necessarily the one who does the greatest things. He is the one that gets the people to do the greatest things.", topic: "leadership" },
  
    // Creativity (3 quotes)
    { text: "Creativity is seeing what others see and thinking what no one else ever thought.", topic: "creativity" },
    { text: "Creativity is the power to connect the seemingly unconnected.", topic: "creativity" },
    { text: "Imagination is the beginning of creation.", topic: "creativity" },
  
    // Perseverance (3 quotes)
    { text: "Perseverance is failing 19 times and succeeding the 20th.", topic: "perseverance" },
    { text: "It's not that I'm so smart, it's just that I stay with problems longer.", topic: "perseverance" },
    { text: "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.", topic: "perseverance" },
  
    // Confidence (3 quotes)
    { text: "Confidence comes not from always being right but from not fearing to be wrong.", topic: "confidence" },
    { text: "With confidence, you have won before you have started.", topic: "confidence" },
    { text: "Confidence is contagious. So is lack of confidence.", topic: "confidence" },
  
    // Teamwork (3 quotes)
    { text: "The strength of the team is each individual member. The strength of each member is the team.", topic: "teamwork" },
    { text: "No individual can win a game by himself.", topic: "teamwork" },
    { text: "Teamwork is the ability to work together toward a common vision.", topic: "teamwork" },
  
    // Growth (3 quotes)
    { text: "Growth is the only evidence of life.", topic: "growth" },
    { text: "The only limit to your growth is the one you set for yourself.", topic: "growth" },
    { text: "Challenges are what make life interesting, and overcoming them is what makes life meaningful.", topic: "growth" },
  
    // Patience (3 quotes)
    { text: "Patience is the companion of wisdom.", topic: "patience" },
    { text: "All things are difficult before they are easy.", topic: "patience" },
    { text: "Patience is the key to paradise.", topic: "patience" },
  
    // Innovation (3 quotes)
    { text: "Innovation is taking two things that already exist and putting them together in a new way.", topic: "innovation" },
    { text: "The best ideas come as jokes. Make your thinking as funny as possible.", topic: "innovation" },
    { text: "Innovation is the ability to see change as an opportunity—not a threat.", topic: "innovation" },
  
    // Integrity (3 quotes)
    { text: "Integrity is choosing courage over comfort.", topic: "integrity" },
    { text: "The strength of a nation derives from the integrity of the home.", topic: "integrity" },
    { text: "Integrity is the essence of everything successful.", topic: "integrity" },
  
    // Optimism (3 quotes)
    { text: "Choose to be optimistic, it feels better.", topic: "optimism" },
    { text: "An optimist sees the opportunity in every difficulty.", topic: "optimism" },
    { text: "Optimism is a happiness magnet. If you stay positive, good things and good people will be drawn to you.", topic: "optimism" },
  
    // Faith (3 quotes)
    { text: "Faith is the bird that feels the light when the dawn is still dark.", topic: "faith" },
    { text: "Faith is not belief without proof, but trust without reservation.", topic: "faith" },
    { text: "Faith is the strength by which a shattered world shall emerge into the light.", topic: "faith" }
];

// Fisher-Yates shuffle for better randomization
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export default function handler(req, res) {
  const { topic } = req.query;

  // Validate topic
  if (topic && typeof topic !== 'string') {
    return res.status(400).json({ error: 'Topic must be a string' });
  }

  let filtered = quotes;
  if (topic) {
    filtered = quotes.filter(q => q.topic.toLowerCase() === topic.toLowerCase());
  }

  if (filtered.length === 0) {
    return res.status(404).json({ message: 'No quotes found for this topic' });
  }

  // Shuffle and pick up to 3
  const shuffled = shuffleArray(filtered);
  res.status(200).json(shuffled.slice(0, 3));
} 