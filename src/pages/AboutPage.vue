<template>
  <q-page class="page-container">
    <!-- Profile section -->
    <div class="row q-mb-lg items-center">
      <div class="col-12 col-md-6 column justify-center q-pa-lg">
        <div class="page-title text-center">{{ $t('about.jobTitle') }}</div>
        <p class="page-subtitle text-center q-mt-sm">{{ $t('about.jobSubtitle') }}</p>
        <div class="row justify-center q-gutter-md q-mt-md">
          <div v-for="icon in technologyIcons" :key="icon.name" class="cursor-pointer">
            <q-icon :name="icon.name" size="28px">
              <q-tooltip>{{ icon.title }}</q-tooltip>
            </q-icon>
          </div>
        </div>
      </div>

      <div class="col-12 col-md-6 flex flex-center">
        <q-img
          :src="$q.dark.isActive ? '/Dark.jpg' : '/Light.jpg'"
          :alt="$q.dark.isActive ? 'Profile Photo - Dark Mode' : 'Profile Photo - Light Mode'"
          fit="cover"
          class="profile-photo"
        >
          <template v-slot:loading>
            <q-spinner color="primary" size="30px" />
          </template>
          <template v-slot:error>
            <div class="text-red text-center">Image failed to load</div>
          </template>
        </q-img>
      </div>
    </div>

    <!-- About section -->
    <q-card class="content-card q-pa-md q-mb-lg">
      <q-card-section>
        <div class="section-title" style="text-align: left; margin-bottom: 12px">
          {{ $t('about.aboutMe') }}
        </div>
        <p class="prose">{{ $t('about.aboutIntro') }}</p>
        <p class="prose">{{ $t('about.aboutJourney') }}</p>
      </q-card-section>
    </q-card>

    <!-- Knowledge areas -->
    <div class="section-title">{{ $t('about.areasTitle') }}</div>

    <div class="card-grid q-mb-lg">
      <q-card v-for="card in knowledgeCards" :key="card.id" class="content-card full-height">
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-h6">{{ card.title }}</div>
            </div>
            <div class="col-auto">
              <q-icon :name="card.icon" color="primary" size="32px" />
            </div>
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <p class="prose">{{ card.description }}</p>
          <div class="text-bold q-mb-xs">{{ card.benefits }}</div>
          <p class="text-caption text-muted">{{ card.benefitsDesc }}</p>
        </q-card-section>
      </q-card>
    </div>

    <!-- Social links -->
    <q-card class="content-card q-pa-md q-mb-lg">
      <q-card-section>
        <div class="text-subtitle1 q-mb-md">{{ $t('about.socialTitle') }}</div>
        <div class="row q-gutter-md">
          <a
            href="https://github.com/Asura-Codes/"
            target="_blank"
            rel="noopener"
            class="social-link"
          >
            <q-icon name="fab fa-github" size="24px" />
            <span class="q-ml-sm">GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/asuracodes/"
            target="_blank"
            rel="noopener"
            class="social-link"
          >
            <q-icon name="fab fa-linkedin" color="blue-8" size="24px" />
            <span class="q-ml-sm">LinkedIn</span>
          </a>

          <a
            href="https://www.facebook.com/asuracodes.site"
            target="_blank"
            rel="noopener"
            class="social-link"
          >
            <q-icon name="fab fa-facebook" color="blue-10" size="24px" />
            <span class="q-ml-sm">Facebook</span>
          </a>
        </div>
      </q-card-section>
    </q-card>

    <!-- Contact form -->
    <q-card id="contact" class="content-card q-pa-md">
      <q-card-section>
        <div class="text-subtitle1 q-mb-md">{{ $t('about.contactTitle') }}</div>

        <q-form @submit.prevent="onSubmit" class="q-gutter-md">
          <q-input filled v-model="name" :label="$t('about.nameLabel')" required />
          <q-input
            filled
            v-model="message"
            :label="$t('about.messageLabel')"
            type="textarea"
            required
          />
          <q-banner class="q-mb-sm">
            {{ $t('about.redirectInfo') }}
          </q-banner>
          <q-btn
            color="primary"
            :label="$t('about.submitButton')"
            type="submit"
            :loading="loading"
          />
        </q-form>
        <q-banner v-if="sent" class="bg-green-2 text-green-8 q-mt-md">{{
          $t('about.thankYouMessage')
        }}</q-banner>
        <q-banner v-if="error" class="bg-red-2 text-red-8 q-mt-md">{{
          $t('about.errorMessage') || 'An error occurred. Please try again later.'
        }}</q-banner>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n({ useScope: 'global' });

interface TechnologyIcon {
  name: string;
  title: string;
}

interface KnowledgeCard {
  id: string;
  title: string;
  description: string;
  benefits: string;
  benefitsDesc: string;
  icon: string;
}

const technologyIcons = computed<TechnologyIcon[]>(() => i18n.tm('about.technologyIcons') ?? []);
const knowledgeCards = computed<KnowledgeCard[]>(() => i18n.tm('about.knowledgeCards') ?? []);

const name = ref('');
const message = ref('');
const sent = ref(false);
const error = ref(false);
const loading = ref(false);

function onSubmit() {
  const baseUrl =
    'https://docs.google.com/forms/d/e/1FAIpQLSd9LVGYjU88UDvMtQDrtIJLXKQTcZXx7GzlYTFQJgTypbUc9g/viewform?usp=pp_url';
  const params = new URLSearchParams({
    'entry.2005620554': name.value,
    'entry.839337160': message.value,
  });
  const prefillUrl = `${baseUrl}&${params.toString()}`;

  window.open(prefillUrl, '_blank');

  sent.value = true;
  setTimeout(() => (sent.value = false), 4000);
  name.value = '';
  message.value = '';
}
</script>

<style scoped>
.profile-photo {
  width: 100%;
  height: 640px;
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(142, 128, 119, 0.4);
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.profile-photo:hover {
  box-shadow: 0 6px 30px rgba(142, 128, 119, 0.6);
}

.body--dark .profile-photo {
  box-shadow: 0 4px 20px rgba(144, 202, 249, 0.1);
}

.body--dark .profile-photo:hover {
  box-shadow: 0 6px 30px rgba(144, 202, 249, 0.2);
}

@media (max-width: 1023px) {
  .profile-photo {
    height: auto;
    aspect-ratio: 1;
    max-width: 400px;
    margin-top: 24px;
  }
}
</style>
