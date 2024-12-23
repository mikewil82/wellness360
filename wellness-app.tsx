import React, { useState, useEffect } from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';
import { 
  Activity, 
  HeartPulse, 
  Brain, 
  Soup, 
  Trophy, 
  UserCheck 
} from 'lucide-react';

// Interfaces for type safety
interface UserProfile {
  name: string;
  age: number;
  fitnessLevel: 'beginner' | 'intermediate' | 'advanced';
  healthGoals: string[];
  medicalConditions?: string[];
}

interface HealthMetrics {
  steps: number;
  sleepQuality: number;
  stressLevel: number;
  mood: number;
}

interface WorkoutPlan {
  type: string;
  duration: number;
  intensity: 'low' | 'medium' | 'high';
}

interface MealPlan {
  meals: Array<{
    name: string;
    calories: number;
    nutrients: string[];
  }>;
}

// Main Wellness App Component
const WellnessApp: React.FC = () => {
  const [userProfile, setUserProfile] = useState<UserProfile>({
    name: 'Alex Johnson',
    age: 32,
    fitnessLevel: 'intermediate',
    healthGoals: ['weight loss', 'stress reduction']
  });

  const [healthMetrics, setHealthMetrics] = useState<HealthMetrics>({
    steps: 6500,
    sleepQuality: 7.5,
    stressLevel: 6,
    mood: 7
  });

  const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan>({
    type: 'Strength Training',
    duration: 45,
    intensity: 'medium'
  });

  const [mealPlan, setMealPlan] = useState<MealPlan>({
    meals: [
      {
        name: 'Balanced Breakfast Bowl',
        calories: 450,
        nutrients: ['protein', 'fiber', 'healthy fats']
      },
      {
        name: 'Grilled Chicken Salad',
        calories: 350,
        nutrients: ['lean protein', 'vegetables']
      }
    ]
  });

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 rounded-lg flex justify-between items-center">
        <h1 className="text-2xl font-bold">Holistic Wellness Hub</h1>
        <div className="flex space-x-4">
          <UserCheck className="text-white" />
          <Trophy className="text-white" />
        </div>
      </header>

      {/* Dashboard Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {/* Health Metrics Card */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <HeartPulse className="mr-2" /> Daily Health Metrics
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart 
              data={[
                { name: 'Steps', value: healthMetrics.steps },
                { name: 'Sleep Quality', value: healthMetrics.sleepQuality * 10 },
                { name: 'Stress Level', value: healthMetrics.stressLevel * 10 },
                { name: 'Mood', value: healthMetrics.mood * 10 }
              ]}
            >
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Workout Plan Card */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Activity className="mr-2" /> Personalized Workout
          </h2>
          <div className="space-y-2">
            <p><strong>Type:</strong> {workoutPlan.type}</p>
            <p><strong>Duration:</strong> {workoutPlan.duration} minutes</p>
            <p><strong>Intensity:</strong> {workoutPlan.intensity}</p>
          </div>
        </div>

        {/* Meal Plan Card */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 flex items-center">
            <Soup className="mr-2" /> Nutrition Plan
          </h2>
          {mealPlan.meals.map((meal, index) => (
            <div key={index} className="mb-2">
              <p><strong>{meal.name}</strong></p>
              <p>Calories: {meal.calories}</p>
              <p>Nutrients: {meal.nutrients.join(', ')}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mental Wellness Section */}
      <div className="mt-4 bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 flex items-center">
          <Brain className="mr-2" /> Mental Wellness Insights
        </h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <h3 className="font-semibold">Mood Tracking</h3>
            <p>Today's Mood Score: {healthMetrics.mood}/10</p>
            <p>Stress Level: {healthMetrics.stressLevel}/10</p>
          </div>
          <div>
            <h3 className="font-semibold">Recommended Actions</h3>
            <ul className="list-disc pl-5">
              <li>10-minute guided meditation</li>
              <li>Deep breathing exercise</li>
              <li>Journal your thoughts</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessApp;
