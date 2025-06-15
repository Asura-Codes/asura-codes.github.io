<template>
  <q-page class="q-pa-md">
    <div class="text-h4 q-mb-md">{{ i18n.t('github.title') }}</div>
    <div class="text-subtitle1 q-mb-lg">{{ i18n.t('github.description') }}</div>

    <!-- Tabs for the main sections -->
    <q-tabs v-model="activeTab" class="text-primary q-mb-md" active-color="primary" indicator-color="primary"
      align="justify">
      <q-tab name="articles" :label="i18n.t('github.sections.articles')" />
      <q-tab name="applications" :label="i18n.t('github.sections.applications')" />
    </q-tabs>

    <q-tab-panels v-model="activeTab" animated class="bg-transparent">
      <!-- Articles Panel -->
      <q-tab-panel name="articles">
        <div class="text-h5 q-mb-md">{{ articles.title }}</div>
        <div class="text-subtitle2 q-mb-lg">{{ articles.description }}</div>

        <q-list bordered separator>
          <q-item v-for="(article, index) in articles.entries" :key="index" class="column q-py-md">
            <div class="row full-width items-start q-mb-sm">
              <q-item-section avatar class="gt-xs">
                <q-icon name="article" color="primary" />
              </q-item-section>
              <q-item-section>
                <div class="text-h6">
                  <span v-if="getLanguageInfo(article.language).flag" class="q-mr-sm"
                    style="font-size: 1.5em; vertical-align: middle;">{{ getLanguageInfo(article.language).flag
                    }}</span>
                  {{ article.title }}
                  <span v-if="getLanguageInfo(article.language).name" class="q-ml-sm text-caption text-grey-7">
                    ({{ getLanguageInfo(article.language).name }})
                  </span>
                </div>
                <div class="text-subtitle2 q-mt-xs">{{ article.description }}</div>
                <div class="q-mt-sm">
                  <q-chip v-for="(topic, tIdx) in article.topics" :key="tIdx" color="primary" text-color="white"
                    class="q-ma-xs">
                    {{ topic }}
                  </q-chip>
                </div>
              </q-item-section>
            </div>
            <div class="row full-width justify-end q-mt-sm">
              <q-btn color="primary" :label="i18n.t('github.viewResource')" :href="article.link" target="_blank"
                icon-right="launch" class="q-px-md" />
            </div>
          </q-item>
        </q-list>
      </q-tab-panel>

      <!-- Applications Panel -->
      <q-tab-panel name="applications">
        <div class="text-h5 q-mb-md">{{ applications.title }}</div>
        <div class="text-subtitle2 q-mb-lg">{{ applications.description }}</div>

        <q-list bordered separator>
          <q-item v-for="(app, index) in applications.entries" :key="index" class="column q-py-md">
            <div class="row full-width items-start q-mb-sm">
              <q-item-section avatar class="gt-xs">
                <q-icon name="apps" color="primary" />
              </q-item-section>
              <q-item-section>
                <div class="text-h6">{{ app.title }}</div>
                <div class="text-subtitle2 q-mt-xs">{{ app.description }}</div>
                <div class="q-mt-sm">
                  <q-chip v-for="(tech, tIdx) in app.technologies" :key="tIdx" color="secondary" text-color="white"
                    class="q-ma-xs">
                    {{ tech }}
                  </q-chip>
                </div>
                <div class="q-mt-sm">
                  <q-list dense>
                    <q-item v-for="(feature, fIdx) in app.features" :key="fIdx">
                      <q-item-section avatar>
                        <q-icon name="check_circle" color="positive" />
                      </q-item-section>
                      <q-item-section>{{ feature }}</q-item-section>
                    </q-item>
                  </q-list>
                </div>
              </q-item-section>
            </div>
            <div class="row full-width justify-end q-mt-sm">
              <q-btn color="primary" :label="i18n.t('github.viewProject')" :href="app.link" target="_blank"
                icon-right="launch" class="q-px-md" />
            </div>
          </q-item>
        </q-list>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n({ useScope: 'global' });
const activeTab = ref('articles');

// Define types for each section
interface ArticleEntry {
  title: string;
  description: string;
  topics?: string[]; // Optional for former CheatSheetEntry items
  link: string;
  language: string; // Spoken language property
}
interface ApplicationEntry {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  link: string; // Changed from github to link
}

interface Section<T> {
  title: string;
  description: string;
  entries: T[];
}

const articles = computed<Section<ArticleEntry>>(() => i18n.tm('github.articles') ?? { title: '', description: '', entries: [] });
const applications = computed<Section<ApplicationEntry>>(() => i18n.tm('github.applications') ?? { title: '', description: '', entries: [] });

// Helper to get language info (flag and name) from i18n
function getLanguageInfo(language: string) {
  // Normalize key (e.g., 'Polish' -> 'polish')
  const key = language.toLowerCase();
  const langObj = i18n.tm(`github.languages.${key}`);
  if (langObj && typeof langObj === 'object') {
    return langObj as { name: string; flag: string };
  }
  return { name: language, flag: '' };
}
</script>

<style scoped>
.q-card,
.q-list,
.q-tab-panel {
  background: #fff;
  color: #23272f;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
}

.body--dark .q-card,
.q-card.q-dark,
.q-card.q-dark\:bg-dark,
.body--dark .q-list,
.body--dark .q-tab-panel {
  background: #23272f !important;
  color: #e3f2fd !important;
  box-shadow: 0 2px 8px rgba(144, 202, 249, 0.08);
}

.q-chip {
  background: #e3f2fd;
  color: #1976d2;
  border-radius: 6px;
  font-size: 0.95em;
  padding: 0 8px;
}

.body--dark .q-chip {
  background: #1565c0;
  color: #bbdefb;
}

.full-height {
  height: 100%;
}
</style>
