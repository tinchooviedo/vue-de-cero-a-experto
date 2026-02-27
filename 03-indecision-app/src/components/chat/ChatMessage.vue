<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <!-- Messages go here -->
      <ChatBubble
      v-for="message in messages"
      v-bind:key="message.id"
      v-bind="message"/>


    </div>
  </div>
</template>

<script lang="ts" setup>
import ChatBubble from './ChatBubble.vue';
import type { ChatMessages } from '@/interfaces/chat-messages.interface';

interface Props{
  messages: ChatMessages[];
}

defineProps<Props>();

</script>
