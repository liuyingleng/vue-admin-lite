<script lang="ts" setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/use-auth'

import GitHubButton from './github-button.vue'
import GoogleButton from './google-button.vue'
import PrivacyPolicyButton from './privacy-policy-button.vue'
import TermsOfServiceButton from './terms-of-service-button.vue'
import ToForgotPasswordLink from './to-forgot-password-link.vue'

const { login, loading } = useAuth()

// 表单数据
const username = ref('admin')
const password = ref('admin123')

// 处理登录
async function handleLogin() {
  if (!username.value || !password.value) {
    return
  }
  await login(username.value, password.value)
}

// 回车登录
function handleKeyPress(event: KeyboardEvent) {
  if (event.key === 'Enter') {
    handleLogin()
  }
}
</script>

<template>
  <UiCard class="w-full max-w-sm">
    <UiCardHeader>
      <UiCardTitle class="text-2xl">
        Login
      </UiCardTitle>
      <UiCardDescription>
        Enter your username and password below to log into your account.
        Not have an account?
        <UiButton
          variant="link" class="px-0 text-muted-foreground"
          @click="$router.push('/auth/sign-up')"
        >
          Sign Up
        </UiButton>
      </UiCardDescription>
    </UiCardHeader>
    <UiCardContent class="grid gap-4">
      <div class="grid gap-2">
        <UiLabel for="username">
          Username
        </UiLabel>
        <UiInput 
          id="username" 
          v-model="username"
          type="text" 
          placeholder="admin" 
          required 
          @keypress="handleKeyPress"
        />
      </div>
      <div class="grid gap-2">
        <div class="flex items-center justify-between">
          <UiLabel for="password">
            Password
          </UiLabel>
          <ToForgotPasswordLink />
        </div>
        <UiInput 
          id="password" 
          v-model="password"
          type="password" 
          required 
          placeholder="*********" 
          @keypress="handleKeyPress"
        />
      </div>

      <UiButton class="w-full" :disabled="loading" @click="handleLogin">
        <UiSpinner v-if="loading" class="mr-2" />
        {{ loading ? 'Logging in...' : 'Login' }}
      </UiButton>

      <UiSeparator label="Or continue with" />

      <div class="flex flex-col items-center justify-between gap-4">
        <GitHubButton />
        <GoogleButton />
      </div>

      <UiCardDescription>
        By clicking login, you agree to our
        <TermsOfServiceButton />
        and
        <PrivacyPolicyButton />
      </UiCardDescription>
    </UiCardContent>
  </UiCard>
</template>
