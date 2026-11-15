<template>
  <q-page class="page-container">
    <!-- Hero -->
    <div class="page-header">
      <div class="page-title">{{ $t('home.heroTitle') }}</div>
      <p class="page-subtitle">{{ $t('home.heroSubtitle') }}</p>
      <p class="signature text-right">{{ $t('home.heroSignature') }}</p>
      <div class="row justify-center q-gutter-md q-mt-lg">
        <q-btn
          color="primary"
          icon="mdi-github"
          :label="$t('home.viewProject')"
          href="https://github.com/Asura-Codes"
          target="_blank"
          rel="noopener"
        />
        <q-btn outline color="primary" :label="$t('home.moreProjects')" to="/github" />
      </div>
    </div>

    <!-- Interests -->
    <div class="section-title">{{ $t('home.interestsTitle') }}</div>

    <div class="card-grid q-mb-xl">
      <q-card v-for="interest in interests" :key="interest.id" class="content-card full-height">
        <q-card-section>
          <div class="row items-center no-wrap">
            <div class="col">
              <div class="text-h6">{{ interest.title }}</div>
            </div>
            <div class="col-auto">
              <q-icon :name="interest.icon" color="primary" size="32px" />
            </div>
          </div>
        </q-card-section>
        <q-card-section class="q-pt-none">
          <p class="prose">{{ interest.description }}</p>
        </q-card-section>
      </q-card>
    </div>

    <!-- Projects -->
    <div class="section-title">{{ $t('home.projectsTitle') }}</div>

    <div class="card-grid card-grid--two q-mb-xl">
      <q-card v-for="project in projects" :key="project.id" class="content-card full-height">
        <q-card-section>
          <div class="text-h6 q-mb-xs">{{ project.title }}</div>
          <p class="prose q-mb-sm">{{ project.description }}</p>
          <div class="q-mb-sm">
            <q-chip
              v-for="(tag, idx) in project.tags"
              :key="idx"
              color="primary"
              text-color="white"
              size="sm"
              class="q-ma-xs"
            >
              {{ tag }}
            </q-chip>
          </div>
          <q-btn
            flat
            color="primary"
            :label="$t('home.viewProject')"
            :href="project.link"
            target="_blank"
            rel="noopener"
            icon-right="launch"
          />
        </q-card-section>
      </q-card>
    </div>

    <div class="text-center q-mb-xl">
      <q-btn outline color="primary" :label="$t('home.moreProjects')" to="/github" size="lg" />
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n({ useScope: 'global' });

interface Interest {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link: string;
}

const interests = computed<Interest[]>(() => i18n.tm('home.interests') ?? []);
const projects = computed<Project[]>(() => i18n.tm('home.projects') ?? []);
</script>
