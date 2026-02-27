<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>

    <ChatMessage :messages="messages" />

    <MessageBox @send-message="onMessage($event)" />
    <!-- $event = Valor que recibis por emit -->
  </div>
</template>

<script lang="ts" setup>
import ChatMessage from '@/components/chat/ChatMessage.vue';
import MessageBox from '@/components/chat/MessageBox.vue';
import type { ChatMessages } from '@/interfaces/chat-messages.interface';
import { ref } from 'vue';

const messages = ref<ChatMessages[]>([
  {
    id: new Date().getTime(),
    message: 'Hola Mundo',
    itsMine: true,
  },
  {
    id: new Date().getTime(),
    message: '¿Queres café?',
    itsMine: true,
  },
  {
    id: new Date().getTime() + 1,
    message: 'No',
    itsMine: false,
    image: 'https://yesno.wtf/assets/yes/1-af11222d8d4af90bdab8fc447c8cfebf.gif',
  },
]);

const onMessage = (text: string) => {
  messages.value.push({
    id: new Date().getTime(),
    itsMine: true,
    message: text,
  });
};
</script>
