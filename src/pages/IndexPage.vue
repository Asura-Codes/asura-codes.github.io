<template>
  <q-page class="column items-center q-pa-md">
    <div class="col text-center">
      <q-avatar size="120px" class="q-mb-md">
        <!-- Replace with your photo in /src/assets/ if available -->
        <img src="/here-i-am.svg" alt="Profile Photo" />
      </q-avatar>
      <div class="text-h4 q-mb-sm">{{ $t('home.jobTitle') }}</div>
      <div class="text-subtitle1 q-mb-md">{{ $t('home.jobSubtitle') }}</div>
      <div class="row justify-center q-gutter-md q-mb-md">
        <div v-for="icon in technologyIcons" :key="icon.name" class="cursor-pointer">
          <q-icon :name="icon.name" size="32px">
            <q-tooltip>{{ icon.title }}</q-tooltip>
          </q-icon>
        </div>
      </div>

      <div class="row q-mb-xl">
        <div class="col-xs-12 col-md-10 col-lg-8 q-mx-auto">
          <q-card class="about-card q-pa-md">
            <q-card-section>
              <div class="text-h5 q-mb-md">{{ $t('home.aboutMe') }}</div>
              <p>
                {{ $t('home.aboutIntro') }}
              </p>
              <p>
                {{ $t('home.aboutJourney') }}
              </p>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="text-h5 q-mb-lg text-center">{{ $t('home.areasTitle') }}</div>

      <div class="row q-col-gutter-md justify-center q-mb-xl">
        <!-- Knowledge Cards - Loop through the array -->
        <div v-for="card in knowledgeCards" :key="card.id" class="col-xs-12 col-sm-6 col-md-4">
          <q-card class="my-card">
            <q-card-section>
              <div class="row items-center no-wrap">
                <div class="col">
                  <div class="text-h6">{{ card.title }}</div>
                </div>
                <div class="col-auto">
                  <q-icon :name="card.icon" color="primary" size="36px" />
                </div>
              </div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <p>
                {{ card.description }}
              </p>
              <div class="text-bold q-mb-xs">{{ card.benefits }}</div>
              <p class="text-caption">
                {{ card.benefitsDesc }}
              </p>
            </q-card-section>
          </q-card>
        </div>
      </div>

      <div class="text-center q-mb-xl">
        <q-btn outline color="primary" :label="$t('home.contactMe')" to="/contact" size="lg" />
      </div>

      <q-separator spaced />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';
import messagesSource from 'src/i18n';
import type { MessageLanguages } from 'src/boot/i18n';

// Setup i18n for this component
const { locale } = useI18n({ useScope: 'global' });

// Define interface for technology icon
interface TechnologyIcon {
  name: string;
  title: string;
}

// Define interface for knowledge card
interface KnowledgeCard {
  id: string;
  title: string;
  description: string;
  benefits: string;
  benefitsDesc: string;
  icon: string;
}

// Get the technology icons from translations
const technologyIcons = computed<TechnologyIcon[]>(() => {
  const currentLocale = locale.value as MessageLanguages;
  return messagesSource[currentLocale].home.technologyIcons as TechnologyIcon[];
});

// Get the knowledge cards array from translations
const knowledgeCards = computed<KnowledgeCard[]>(() => {
  const currentLocale = locale.value as MessageLanguages;
  return messagesSource[currentLocale].home.knowledgeCards as KnowledgeCard[];
});
</script>

<style scoped>
.my-card {
  background: #fff;
  color: #23272f;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s, transform 0.2s;
  height: 100%;
}

.my-card:hover {
  box-shadow: 0 4px 16px rgba(25, 118, 210, 0.1);
  transform: translateY(-2px);
}

.body--dark .my-card,
.my-card.q-dark,
.my-card.q-dark\:bg-dark {
  background: #23272f !important;
  color: #e3f2fd !important;
  box-shadow: 0 2px 8px rgba(144, 202, 249, 0.08);
}

.about-card {
  border-left: 4px solid #1976d2;
  background: #fff;
  color: #23272f;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  transition: box-shadow 0.2s;
}

.about-card:hover {
  box-shadow: 0 4px 16px rgba(25, 118, 210, 0.1);
}

.body--dark .about-card,
.about-card.q-dark,
.about-card.q-dark\:bg-dark {
  background: #23272f !important;
  color: #e3f2fd !important;
  border-left: 4px solid #90caf9;
  box-shadow: 0 2px 8px rgba(144, 202, 249, 0.08);
}

.about-card p {
  margin-bottom: 1rem;
  line-height: 1.6;
}
</style>
