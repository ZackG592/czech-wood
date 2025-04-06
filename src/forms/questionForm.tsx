'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';

import Button from '@/shared/button/button';

export default function QuestionForm() {
  const { register, handleSubmit } = useForm();
  const [data, setData] = useState<string>('');

  return (
    <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
      <input
        type="text"
        {...register('name')}
        placeholder="Your name"
        required
      />
      <input
        type="text"
        {...register('phonenumber')}
        placeholder="Your telephone number"
        required
      />
      <textarea {...register('question')} placeholder="Your question" />
      <Button text="Send" />
    </form>
  );
}
