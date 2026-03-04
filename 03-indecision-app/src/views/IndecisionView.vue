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
import { useChat } from '@/composables/useChat';

const { messages, onMessage} = useChat();


</script>
