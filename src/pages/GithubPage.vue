<template>
  <q-page class="page-container">
    <div class="page-header">
      <div class="page-title">{{ i18n.t('github.title') }}</div>
      <div class="page-subtitle">{{ i18n.t('github.description') }}</div>
    </div>

    <q-tabs
      v-model="activeTab"
      class="text-primary q-mb-md"
      active-color="primary"
      indicator-color="primary"
      align="justify"
    >
      <q-tab name="articles" :label="i18n.t('github.sections.articles')" />
      <q-tab name="applications" :label="i18n.t('github.sections.applications')" />
    </q-tabs>

    <q-tab-panels v-model="activeTab" animated class="bg-transparent">
      <!-- Articles Panel -->
      <q-tab-panel name="articles" class="q-pa-none">
        <div class="section-title">{{ articles.title }}</div>
        <p class="page-subtitle q-mb-lg">{{ articles.description }}</p>

        <q-card
          v-for="(article, index) in articles.entries"
          :key="index"
          class="content-card q-mb-md"
        >
          <q-card-section>
            <div class="row items-start">
              <div class="col-auto q-mr-md gt-xs">
                <q-icon name="article" color="primary" size="28px" />
              </div>
              <div class="col">
                <div class="text-h6">
                  <span
                    v-if="getLanguageInfo(article.language).flag"
                    class="q-mr-sm"
                    style="font-size: 1.4em; vertical-align: middle"
                  >
                    {{ getLanguageInfo(article.language).flag }}
                  </span>
                  {{ article.title }}
                  <span
                    v-if="getLanguageInfo(article.language).name"
                    class="q-ml-sm text-caption text-muted"
                  >
                    ({{ getLanguageInfo(article.language).name }})
                  </span>
                </div>
                <p class="prose q-mt-sm q-mb-sm">{{ article.description }}</p>
                <div>
                  <span v-for="(topic, tIdx) in article.topics" :key="tIdx" class="tag-chip">
                    {{ topic }}
                  </span>
                </div>
              </div>
            </div>
            <div class="row justify-end q-mt-md">
              <q-btn
                color="primary"
                :label="i18n.t('github.viewResource')"
                :href="article.link"
                target="_blank"
                icon-right="launch"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-tab-panel>

      <!-- Applications Panel -->
      <q-tab-panel name="applications" class="q-pa-none">
        <div class="section-title">{{ applications.title }}</div>
        <p class="page-subtitle q-mb-lg">{{ applications.description }}</p>

        <q-card
          v-for="(app, index) in applications.entries"
          :key="index"
          class="content-card q-mb-md"
        >
          <q-card-section>
            <div class="row items-start">
              <div class="col-auto q-mr-md gt-xs">
                <q-icon name="apps" color="primary" size="28px" />
              </div>
              <div class="col">
                <div class="text-h6">{{ app.title }}</div>
                <p class="prose q-mt-sm q-mb-sm">{{ app.description }}</p>
                <div class="q-mb-sm">
                  <span v-for="(tech, tIdx) in app.technologies" :key="tIdx" class="tag-chip">
                    {{ tech }}
                  </span>
                </div>
                <q-list dense>
                  <q-item v-for="(feature, fIdx) in app.features" :key="fIdx" class="q-px-none">
                    <q-item-section avatar>
                      <q-icon name="check_circle" color="positive" />
                    </q-item-section>
                    <q-item-section>{{ feature }}</q-item-section>
                  </q-item>
                </q-list>
              </div>
            </div>
            <div class="row justify-end q-mt-md">
              <q-btn
                color="primary"
                :label="i18n.t('github.viewProject')"
                :href="app.link"
                target="_blank"
                icon-right="launch"
              />
            </div>
          </q-card-section>
        </q-card>
      </q-tab-panel>
    </q-tab-panels>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n({ useScope: 'global' });
const activeTab = ref('articles');

interface ArticleEntry {
  title: string;
  description: string;
  topics?: string[];
  link: string;
  language: string;
}

interface ApplicationEntry {
  title: string;
  description: string;
  technologies: string[];
  features: string[];
  link: string;
}

interface Section<T> {
  title: string;
  description: string;
  entries: T[];
}

const articles = computed<Section<ArticleEntry>>(
  () => i18n.tm('github.articles') ?? { title: '', description: '', entries: [] },
);
const applications = computed<Section<ApplicationEntry>>(
  () => i18n.tm('github.applications') ?? { title: '', description: '', entries: [] },
);

function getLanguageInfo(language: string) {
  const key = language.toLowerCase();
  const langObj = i18n.tm(`github.languages.${key}`);
  if (langObj && typeof langObj === 'object') {
    return langObj as { name: string; flag: string };
  }
  return { name: language, flag: '' };
}
</script>
