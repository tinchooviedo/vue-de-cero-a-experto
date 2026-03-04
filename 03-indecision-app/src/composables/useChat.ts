import { sleep } from '@/helpers/sleep';
import type { ChatMessages } from '@/interfaces/chat-messages.interface';
import type { YesNoResponse } from '@/interfaces/yes-no.response.interface';
import { ref } from 'vue';

export const useChat = () => {
  const messages = ref<ChatMessages[]>([]);

  const getHerResponse = async () => {
    const resp = await fetch('https://yesno.wtf/api');
    const data = (await resp.json()) as YesNoResponse;

    return data;
  };

  const onMessage = async (text: string) => {
    if (text.length === 0) {
      return;
    }

    messages.value.push({
      id: new Date().getTime(),
      itsMine: true,
      message: text,
    });

    if (!text.endsWith('?')) {
      return;
    }

    await sleep();

    const { answer, image } = await getHerResponse();

    messages.value.push({
      id: new Date().getTime(),
      itsMine: false,
      message: answer,
      image: image,
    });

    const chatMessages = document.getElementById('chat-messages');

    if (chatMessages) {
      setTimeout(() => {
      chatMessages.scrollTo({
          top: chatMessages.scrollHeight,
          behavior: 'smooth',
        });
      }, 100);
    }

  };

  return {
    // Properties
    messages,
    //Methods
    onMessage,
  };
};
