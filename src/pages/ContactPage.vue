<template>
  <q-page class="q-pa-md">
    <div class="text-h4 q-mb-md">{{ $t('contact.title') }}</div>

    <!-- Social links at the top -->
    <q-card class="social-card q-mb-md">
      <q-card-section>
        <div class="social-container">
          <a href="https://github.com/Asura-Codes/" target="_blank" rel="noopener" class="social-link">
            <q-icon name="fab fa-github" size="28px" />
            <div class="social-details">
              <span class="social-title">GitHub</span>
            </div>
          </a>

          <a href="https://www.linkedin.com/in/asuracodes/" target="_blank" rel="noopener" class="social-link">
            <q-icon name="fab fa-linkedin" color="blue-8" size="28px" />
            <div class="social-details">
              <span class="social-title">LinkedIn</span>
            </div>
          </a>

          <a href="https://www.facebook.com/asuracodes.site" target="_blank" rel="noopener" class="social-link">
            <q-icon name="fab fa-facebook" color="blue-10" size="28px" />
            <div class="social-details">
              <span class="social-title">Facebook</span>
            </div>
          </a>
        </div>
      </q-card-section>
    </q-card>

    <q-card>
      <q-card-section>
        <div class="text-subtitle1 q-mb-sm">{{ formTitle }}</div>

        <q-form @submit.prevent="onSubmit" class="q-gutter-md">
          <q-input filled v-model="name" :label="nameLabel" required />
          <q-input filled v-model="message" :label="messageLabel" type="textarea" required />
          <q-banner class="q-mb-sm">
            {{ $t('contact.redirectInfo') }}
          </q-banner>
          <div class="row items-center q-gutter-sm">
            <q-btn color="primary" :label="$t('contact.submitButton')" type="submit" :loading="loading" />
          </div>
        </q-form>
        <q-banner v-if="sent" class="bg-green-2 text-green-8 q-mt-md">{{ $t('contact.thankYouMessage') }}</q-banner>
        <q-banner v-if="error" class="bg-red-2 text-red-8 q-mt-md">{{ $t('contact.errorMessage') ||
          'An error occurred. Please try again later.' }}</q-banner>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

// Setup i18n - initialize it properly to ensure proper composition API usage
const { t } = useI18n({ useScope: 'global' });

const name = ref('');
const message = ref('');
const sent = ref(false);
const error = ref(false);
const loading = ref(false);

// Use computed properties to get i18n values to avoid serialization issues
const formTitle = computed(() => t('contact.formTitle'));
const nameLabel = computed(() => t('contact.nameLabel'));
const messageLabel = computed(() => t('contact.messageLabel'));

function onSubmit() {
  // Build the prefilled Google Form URL
  const baseUrl = 'https://docs.google.com/forms/d/e/1FAIpQLSd9LVGYjU88UDvMtQDrtIJLXKQTcZXx7GzlYTFQJgTypbUc9g/viewform?usp=pp_url';
  const params = new URLSearchParams({
    'entry.2005620554': name.value,
    'entry.839337160': message.value
  });
  const prefillUrl = `${baseUrl}&${params.toString()}`;

  // Open the prefilled form in a new tab
  window.open(prefillUrl, '_blank');

  // Show thank you banner and reset form
  sent.value = true;
  setTimeout(() => (sent.value = false), 4000);
  name.value = '';
  message.value = '';
}
</script>

<style scoped>
.q-card {
  background: #fff;
  color: #23272f;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.body--dark .q-card,
.q-card.q-dark,
.q-card.q-dark\:bg-dark {
  background: #23272f !important;
  color: #e3f2fd !important;
  box-shadow: 0 2px 8px rgba(144, 202, 249, 0.08);
}

.q-banner {
  background: #f5f7fa;
  color: #1a237e;
  border-radius: 8px;
  padding: 12px 20px;
  font-size: 1.05em;
  border: 1px solid #e3e8ee;
  box-shadow: 0 1px 4px rgba(30, 42, 73, 0.06);
  margin-bottom: 8px;
  transition: background 0.2s, color 0.2s;
}

.body--dark .q-banner {
  background: #16213e;
  color: #bbdefb;
  border: 1px solid #22325a;
  box-shadow: 0 1px 4px rgba(30, 42, 73, 0.18);
}

/* Programmer-style social links */
.social-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  font-family: 'Fira Code', 'Source Code Pro', monospace;
}

.social-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
  padding: 12px 16px;
  border-radius: 6px;
  background: rgba(0, 0, 0, 0.03);
  transition: all 0.2s ease;
  position: relative;
  border-left: 3px solid transparent;
  min-width: 260px;
}

.body--dark .social-link {
  background: rgba(255, 255, 255, 0.05);
}

.social-link:hover {
  background: rgba(0, 0, 0, 0.05);
  transform: translateY(-2px);
  border-left-color: #1976d2;
}

.body--dark .social-link:hover {
  background: rgba(255, 255, 255, 0.08);
  border-left-color: #29b6f6;
}

.social-details {
  margin-left: 16px;
  display: flex;
  flex-direction: column;
}

.social-title {
  font-weight: 600;
  margin-bottom: 4px;
}

.social-caption {
  font-size: 0.85em;
  opacity: 0.8;
  font-family: monospace;
}

@media (max-width: 767px) {
  .social-link {
    min-width: 100%;
  }
}
</style>
