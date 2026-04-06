import { Topic } from '../Topics/topics';
import { useNavigate } from 'react-router';
import { protectedRoutes } from '@/router/routes';
import { useEffect } from 'react';

export const TopicLearning = ({ topic }: { topic: Topic }) => {
  const navigate = useNavigate();
  console.log(topic);

  useEffect(() => {
    navigate(protectedRoutes.practice.replace(':topicId', topic.id), {
      state: {
        topic: topic,
      },
    });
  });

  return null;
};
