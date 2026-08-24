"use client";

import { useState } from "react";

type NutritionTopic =
  | "Foods"
  | "Nutrients"
  | "Symptoms"
  | "Healthy Eating"
  | "Meal Ideas"
  | "General Nutrition";

type NutritionGoal =
  | "General Nutrition"
  | "Improve Nutrient Intake"
  | "Healthy Eating"
  | "Symptom-Related Nutrition"
  | "Meal Planning";

type DietPreference =
  | "No Preference"
  | "Vegetarian"
  | "Vegan"
  | "Non-Vegetarian";

type AgeGroup =
  | "Prefer Not To Say"
  | "Under 18"
  | "18–30"
  | "31–50"
  | "51–65"
  | "65+";

const exampleQuestions = [
  "What foods are rich in iron?",
  "What nutrients are important for healthy hair?",
  "What foods are high in vitamin C?",
  "What are some healthy high-protein breakfast ideas?",
  "What foods can support healthy digestion?",
  "How can I improve iron absorption from food?",
];

const topicQuestions: Record<NutritionTopic, string[]> = {
  Foods: [
    "What foods are rich in iron?",
    "Which foods are high in vitamin C?",
    "What foods are good sources of protein?",
    "Which foods are rich in magnesium?",
  ],

  Nutrients: [
    "What nutrients are important for healthy hair?",
    "What are the best food sources of vitamin D?",
    "Why is iron important in the diet?",
    "Which foods contain both iron and vitamin C?",
  ],

  Symptoms: [
    "What foods may support healthy hair?",
    "What foods are good for fatigue?",
    "What nutrients support healthy digestion?",
    "What foods are good sources of iron for low iron intake?",
  ],

  "Healthy Eating": [
    "What does a balanced diet include?",
    "What are some healthy foods to eat every day?",
    "How can I improve my overall nutrition?",
    "What are simple healthy eating habits?",
  ],

  "Meal Ideas": [
    "What are some healthy high-protein breakfast ideas?",
    "What is a nutritious lunch idea?",
    "What are some healthy vegetarian meal ideas?",
    "What are some nutrient-rich snack ideas?",
  ],

  "General Nutrition": [
    "What foods are rich in iron?",
    "What nutrients are important for healthy hair?",
    "What are some healthy breakfast ideas?",
    "Which foods are good sources of vitamin C?",
  ],
};

function generateAnswer(
  question: string,
  topic: NutritionTopic,
  goal: NutritionGoal,
  diet: DietPreference,
  ageGroup: AgeGroup
): string {
  const q = question.toLowerCase();

  const context =
    diet !== "No Preference"
      ? `Since you selected a ${diet.toLowerCase()} diet, the suggestions below focus on foods that fit that preference.`
      : "";

  const ageContext =
    ageGroup !== "Prefer Not To Say"
      ? ` You selected the ${ageGroup} age group, but individual nutrition needs can vary considerably within an age group.`
      : "";

  if (
    q.includes("iron") ||
    q.includes("iron deficiency") ||
    q.includes("low iron")
  ) {
    if (diet === "Vegetarian" || diet === "Vegan") {
      return `For a plant-based diet, useful sources of iron include lentils, beans, chickpeas, tofu, spinach, pumpkin seeds, and other legumes and seeds. Pairing plant-based iron sources with vitamin-C-rich foods such as citrus fruits, tomatoes, bell peppers, or broccoli can help support iron absorption.

${context}${ageContext}

If you are concerned about iron deficiency or persistent fatigue, a healthcare professional can assess whether testing or individualized advice is appropriate.`;
    }

    return `Good dietary sources of iron include lean red meat, lentils, beans, chickpeas, spinach, pumpkin seeds, and other iron-rich foods. Vitamin-C-rich foods such as citrus fruits, tomatoes, bell peppers, and broccoli can be included alongside plant-based iron sources to support absorption.

${context}${ageContext}

If you have been diagnosed with iron deficiency or have persistent symptoms such as fatigue or weakness, speak with a qualified healthcare professional for personalized advice.`;
  }

  if (
    q.includes("vitamin c") ||
    q.includes("vitamin-c")
  ) {
    return `Foods naturally rich in vitamin C include oranges and other citrus fruits, guava, kiwi, strawberries, bell peppers, broccoli, tomatoes, and other fruits and vegetables.

Vitamin C also plays a role in supporting normal immune function and can help improve absorption of non-heme iron from plant foods when eaten together.

${context}${ageContext}`;
  }

  if (
    q.includes("vitamin d") ||
    q.includes("vitamin-d")
  ) {
    return `Vitamin D is found naturally in relatively few foods. Sources can include fatty fish, egg yolks, and some fortified foods. The amount obtained from food varies considerably.

Because vitamin D status depends on more than diet alone, people concerned about deficiency should discuss their individual situation with a healthcare professional.

${context}${ageContext}`;
  }

  if (
    q.includes("hair") ||
    q.includes("hair loss")
  ) {
    return `Healthy hair growth depends on adequate overall nutrition. Nutrients commonly associated with normal hair health include protein, iron, zinc, vitamin D, and several B vitamins.

Useful foods can include eggs, fish, lean meats, legumes, nuts, seeds, leafy greens, dairy or fortified alternatives, and a variety of fruits and vegetables.

Hair loss can have many possible causes, so nutrition alone may not explain persistent or significant hair loss. Consider speaking with a healthcare professional if the problem continues.

${context}${ageContext}`;
  }

  if (
    q.includes("protein") ||
    q.includes("high protein")
  ) {
    if (diet === "Vegan") {
      return `Plant-based protein sources include lentils, beans, chickpeas, tofu, tempeh, peas, nuts, seeds, and some whole grains.

For a balanced meal, combine a protein-rich food with vegetables, whole grains or other high-fiber carbohydrates, and a healthy fat source.

${context}${ageContext}`;
    }

    if (diet === "Vegetarian") {
      return `Vegetarian protein sources can include lentils, beans, chickpeas, tofu, Greek yogurt, cottage cheese, eggs, nuts, seeds, and other dairy foods.

For a balanced meal, combine protein with vegetables, whole grains or other high-fiber carbohydrates, and healthy fats.

${context}${ageContext}`;
    }

    return `Good protein sources include eggs, fish, lean meat, dairy foods, lentils, beans, chickpeas, tofu, nuts, and seeds.

A balanced meal can combine a protein source with vegetables, whole grains or other high-fiber carbohydrates, and healthy fats.

${context}${ageContext}`;
  }

  if (
    q.includes("magnesium") ||
    q.includes("magnesium-rich")
  ) {
    return `Foods that can provide magnesium include pumpkin seeds, almonds and other nuts, beans, lentils, spinach and other leafy greens, whole grains, and some fish.

Including a variety of minimally processed foods is a practical way to increase dietary magnesium intake.

${context}${ageContext}`;
  }

  if (
    q.includes("digestion") ||
    q.includes("digestive") ||
    q.includes("constipation")
  ) {
    return `For general digestive health, focus on a varied diet that includes fiber-rich foods such as vegetables, fruits, legumes, whole grains, nuts, and seeds. Adequate fluid intake is also important.

Increasing fiber gradually can be more comfortable than making a sudden large increase.

Persistent constipation, severe abdominal pain, blood in the stool, or other concerning symptoms should be discussed with a healthcare professional.

${context}${ageContext}`;
  }

  if (
    q.includes("breakfast") ||
    q.includes("meal idea") ||
    q.includes("meal ideas")
  ) {
    if (diet === "Vegan") {
      return `A nutritious vegan breakfast could combine oats with fruit, nuts or seeds, and a fortified plant-based milk; or a tofu and vegetable meal with whole-grain toast.

Try to include a source of protein, fiber, fruit or vegetables, and healthy fats where practical.

${context}${ageContext}`;
    }

    if (diet === "Vegetarian") {
      return `A nutritious vegetarian breakfast could include Greek yogurt with fruit and nuts, oatmeal with seeds and fruit, eggs with vegetables and whole-grain toast, or a bean-based breakfast.

Try to include protein, fiber, fruit or vegetables, and healthy fats.

${context}${ageContext}`;
    }

    return `Healthy breakfast ideas include oatmeal with fruit and nuts, eggs with vegetables and whole-grain toast, Greek yogurt with fruit and seeds, or a balanced smoothie containing fruit, vegetables, and a protein source.

Aim to combine protein, fiber, and nutrient-rich foods rather than relying mainly on highly processed breakfast foods.

${context}${ageContext}`;
  }

  if (
    q.includes("healthy diet") ||
    q.includes("balanced diet") ||
    q.includes("healthy eating")
  ) {
    return `A balanced eating pattern generally includes a variety of vegetables, fruits, whole grains or other high-fiber carbohydrates, protein-rich foods, and healthy fat sources.

Rather than focusing on one "perfect" food, aim for variety and an overall pattern of nutritious foods.

Your selected goal is ${goal.toLowerCase()}.${ageContext}

If you have specific dietary restrictions or medical conditions, individualized advice from a qualified professional may be appropriate.`;
  }

  if (
    q.includes("fatigue") ||
    q.includes("tired") ||
    q.includes("low energy") ||
    q.includes("weakness")
  ) {
    return `Fatigue and low energy can have many possible causes. From a nutrition perspective, it can be useful to maintain regular balanced meals containing protein, fiber-rich carbohydrates, vegetables or fruit, and healthy fats.

Iron, vitamin B12, folate, vitamin D, and overall energy intake are among the nutritional factors that may be relevant in some situations, but symptoms alone cannot determine a deficiency.

If fatigue or weakness is persistent, severe, or unexplained, speak with a healthcare professional.

${context}${ageContext}`;
  }

  return `Based on your question, a varied diet containing vegetables, fruits, whole grains, legumes, nuts, seeds, and appropriate protein sources is a good foundation for general nutrition.

For a more specific answer, try asking about a particular food, nutrient, symptom, or nutrition goal.

For example:

• "What foods are rich in iron?"
• "What nutrients are important for healthy hair?"
• "What foods are high in vitamin C?"
• "What are some healthy high-protein breakfast ideas?"

${context}${ageContext}`;
}

export default function AiNutritionPage() {
  const [question, setQuestion] = useState("");

  const [topic, setTopic] =
    useState<NutritionTopic>("General Nutrition");

  const [goal, setGoal] =
    useState<NutritionGoal>("General Nutrition");

  const [diet, setDiet] =
    useState<DietPreference>("No Preference");

  const [ageGroup, setAgeGroup] =
    useState<AgeGroup>("Prefer Not To Say");

  const [answer, setAnswer] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async () => {
    const trimmedQuestion = question.trim();

    if (!trimmedQuestion || isLoading) {
      return;
    }

    setIsLoading(true);
    setAnswer("");

    await new Promise((resolve) =>
      setTimeout(resolve, 700)
    );

    const generatedAnswer = generateAnswer(
      trimmedQuestion,
      topic,
      goal,
      diet,
      ageGroup
    );

    setAnswer(generatedAnswer);
    setIsLoading(false);
  };

  const handleExampleClick = (example: string) => {
    setQuestion(example);
    setAnswer("");
  };

  const handleTopicChange = (
    selectedTopic: NutritionTopic
  ) => {
    setTopic(selectedTopic);
    setQuestion("");
    setAnswer("");
  };

  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="bg-gradient-to-r from-green-700 to-green-500 text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 text-center">

          <div
            className="text-6xl sm:text-7xl"
            aria-hidden="true"
          >
            🤖🥗
          </div>

          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
            AI Nutrition
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-green-50 max-w-3xl mx-auto leading-8">
            Get general nutrition guidance about foods,
            nutrients, healthy eating, symptoms, and meal ideas.
          </p>

        </div>
      </section>

      {/* =====================================================
          MAIN CONTENT
      ===================================================== */}

      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">

        {/* ===================================================
            QUESTION CARD
        =================================================== */}

        <div className="bg-white rounded-3xl shadow-lg border border-gray-200 p-6 sm:p-8">

          <div className="flex items-start gap-4">

            <div
              className="flex-shrink-0 w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center text-2xl"
              aria-hidden="true"
            >
              💡
            </div>

            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
                Ask a Nutrition Question
              </h2>

              <p className="mt-2 text-gray-600 leading-6">
                Tell us what you want to know and provide a
                little context to get more relevant nutrition guidance.
              </p>
            </div>

          </div>

          {/* =================================================
              NUTRITION TOPIC
          ================================================= */}

          <div className="mt-8">

            <label
              htmlFor="nutrition-topic"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Nutrition Topic
            </label>

            <select
              id="nutrition-topic"
              value={topic}
              onChange={(event) =>
                handleTopicChange(
                  event.target.value as NutritionTopic
                )
              }
              className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-gray-800 bg-white outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition"
            >
              <option>General Nutrition</option>
              <option>Foods</option>
              <option>Nutrients</option>
              <option>Symptoms</option>
              <option>Healthy Eating</option>
              <option>Meal Ideas</option>
            </select>

          </div>

          {/* =================================================
              GOAL
          ================================================= */}

          <div className="mt-6">

            <label
              htmlFor="nutrition-goal"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              What Is Your Goal?
            </label>

            <select
              id="nutrition-goal"
              value={goal}
              onChange={(event) => {
                setGoal(
                  event.target.value as NutritionGoal
                );
                setAnswer("");
              }}
              className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-gray-800 bg-white outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition"
            >
              <option>General Nutrition</option>
              <option>Improve Nutrient Intake</option>
              <option>Healthy Eating</option>
              <option>Symptom-Related Nutrition</option>
              <option>Meal Planning</option>
            </select>

          </div>

          {/* =================================================
              DIET PREFERENCE
          ================================================= */}

          <div className="mt-6">

            <label
              htmlFor="diet-preference"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Diet Preference
            </label>

            <select
              id="diet-preference"
              value={diet}
              onChange={(event) => {
                setDiet(
                  event.target.value as DietPreference
                );
                setAnswer("");
              }}
              className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-gray-800 bg-white outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition"
            >
              <option>No Preference</option>
              <option>Vegetarian</option>
              <option>Vegan</option>
              <option>Non-Vegetarian</option>
            </select>

          </div>

          {/* =================================================
              AGE GROUP
          ================================================= */}

          <div className="mt-6">

            <label
              htmlFor="age-group"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Age Group
              <span className="font-normal text-gray-500">
                {" "}
                (Optional)
              </span>
            </label>

            <select
              id="age-group"
              value={ageGroup}
              onChange={(event) => {
                setAgeGroup(
                  event.target.value as AgeGroup
                );
                setAnswer("");
              }}
              className="w-full rounded-2xl border border-gray-300 px-5 py-4 text-gray-800 bg-white outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition"
            >
              <option>Prefer Not To Say</option>
              <option>Under 18</option>
              <option>18–30</option>
              <option>31–50</option>
              <option>51–65</option>
              <option>65+</option>
            </select>

          </div>

          {/* =================================================
              QUESTION
          ================================================= */}

          <div className="mt-6">

            <label
              htmlFor="nutrition-question"
              className="block text-sm font-semibold text-gray-800 mb-2"
            >
              Your Nutrition Question
            </label>

            <textarea
              id="nutrition-question"
              value={question}
              onChange={(event) => {
                setQuestion(event.target.value);
                setAnswer("");
              }}
              onKeyDown={(event) => {
                if (
                  event.key === "Enter" &&
                  (event.ctrlKey || event.metaKey)
                ) {
                  event.preventDefault();
                  handleAsk();
                }
              }}
              placeholder="Example: What foods are rich in iron?"
              rows={5}
              maxLength={1000}
              className="w-full resize-y rounded-2xl border border-gray-300 px-5 py-4 text-gray-800 placeholder-gray-400 outline-none focus:border-green-500 focus:ring-4 focus:ring-green-100 transition"
            />

            <div className="mt-2 flex justify-between text-xs text-gray-500">
              <span>
                Press Ctrl + Enter to ask
              </span>

              <span>
                {question.length}/1000
              </span>
            </div>

          </div>

          {/* =================================================
              ASK BUTTON
          ================================================= */}

          <button
            type="button"
            onClick={handleAsk}
            disabled={!question.trim() || isLoading}
            className="mt-6 w-full sm:w-auto bg-green-600 hover:bg-green-700 disabled:bg-gray-300 disabled:cursor-not-allowed text-white font-semibold px-8 py-4 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          >
            {isLoading ? (
              <span className="flex items-center justify-center gap-3">
                <span
                  className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"
                  aria-hidden="true"
                />

                Preparing Answer...
              </span>
            ) : (
              "Get Nutrition Guidance →"
            )}
          </button>

          {/* =================================================
              ANSWER
          ================================================= */}

          {answer && (
            <div
              className="mt-8 bg-green-50 border border-green-200 rounded-2xl p-6"
              aria-live="polite"
            >

              <div className="flex items-start gap-4">

                <div
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center"
                  aria-hidden="true"
                >
                  🤖
                </div>

                <div className="flex-1">

                  <h2 className="font-bold text-gray-900">
                    Nutrition Guidance
                  </h2>

                  <div className="mt-3 text-gray-700 leading-7 whitespace-pre-line">
                    {answer}
                  </div>

                </div>

              </div>

            </div>
          )}

        </div>

        {/* ===================================================
            SEO-FOCUSED QUESTIONS
        =================================================== */}

        <div className="mt-10">

          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Popular Nutrition Questions
          </h2>

          <p className="mt-2 text-gray-600 text-center">
            Explore common nutrition questions and topics.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">

            {topicQuestions[topic].map((example) => (
              <button
                key={example}
                type="button"
                onClick={() => handleExampleClick(example)}
                className="text-left bg-white border border-gray-200 rounded-2xl p-5 shadow-sm hover:shadow-md hover:border-green-300 hover:bg-green-50 transition-all duration-300"
              >
                <span
                  className="text-xl"
                  aria-hidden="true"
                >
                  💬
                </span>

                <span className="block mt-3 text-gray-800 font-medium">
                  {example}
                </span>

                <span className="block mt-2 text-green-700 text-sm font-semibold">
                  Ask this question →
                </span>
              </button>
            ))}

          </div>

        </div>

        {/* ===================================================
            WHAT IT CAN HELP WITH
        =================================================== */}

        <div className="mt-12 bg-white rounded-3xl border border-gray-200 p-6 sm:p-8">

          <h2 className="text-2xl font-bold text-gray-900">
            What Can AI Nutrition Help With?
          </h2>

          <div className="grid sm:grid-cols-2 gap-4 mt-6">

            <div className="bg-green-50 rounded-2xl p-5">

              <div
                className="text-3xl"
                aria-hidden="true"
              >
                🥗
              </div>

              <h3 className="mt-3 font-bold text-gray-900">
                Healthy Foods
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-6">
                Explore foods and their general nutrition information.
              </p>

            </div>

            <div className="bg-blue-50 rounded-2xl p-5">

              <div
                className="text-3xl"
                aria-hidden="true"
              >
                💊
              </div>

              <h3 className="mt-3 font-bold text-gray-900">
                Essential Nutrients
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-6">
                Learn about vitamins, minerals, protein, fiber,
                and other nutrients.
              </p>

            </div>

            <div className="bg-orange-50 rounded-2xl p-5">

              <div
                className="text-3xl"
                aria-hidden="true"
              >
                🍽️
              </div>

              <h3 className="mt-3 font-bold text-gray-900">
                Healthy Meal Ideas
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-6">
                Explore general ideas for balanced and nutritious meals.
              </p>

            </div>

            <div className="bg-purple-50 rounded-2xl p-5">

              <div
                className="text-3xl"
                aria-hidden="true"
              >
                📚
              </div>

              <h3 className="mt-3 font-bold text-gray-900">
                Nutrition Education
              </h3>

              <p className="mt-2 text-sm text-gray-600 leading-6">
                Understand general nutrition concepts in simple language.
              </p>

            </div>

          </div>

        </div>

        {/* ===================================================
            DISCLAIMER
        =================================================== */}

        <div className="mt-10 bg-amber-50 border border-amber-200 rounded-2xl p-6">

          <div className="flex items-start gap-4">

            <div
              className="text-2xl"
              aria-hidden="true"
            >
              ℹ️
            </div>

            <div>

              <h2 className="font-bold text-gray-900">
                Important Information
              </h2>

              <p className="mt-2 text-sm text-gray-600 leading-6">
                AI Nutrition provides general nutrition information
                for educational purposes. It is not a substitute for
                professional medical advice, diagnosis, or treatment.
                Speak with a qualified healthcare professional for
                personalized medical or dietary advice.
              </p>

            </div>

          </div>

        </div>

      </section>
    </main>
  );
}