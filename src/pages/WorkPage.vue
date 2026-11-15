<template>
  <q-page class="page-container">
    <div class="page-header">
      <div class="page-title">{{ $t('work.pageTitle') }}</div>
      <div class="page-subtitle">{{ $t('work.pageSubtitle') }}</div>
    </div>

    <div class="card-grid card-grid--two">
      <q-card
        v-for="(project, index) in localizedProjects"
        :key="index"
        class="content-card content-card--top"
      >
        <q-card-section>
          <div class="tag-chip">{{ getProjectCategory(project) }}</div>
          <div class="text-h6 q-mt-sm">{{ project?.title || '' }}</div>
          <div class="text-caption q-mb-sm text-muted">{{ project?.tech || '' }}</div>
          <q-separator class="q-my-sm" />
          <div class="prose q-mb-sm">{{ project?.keywords || '' }}</div>
          <div class="size-indicator" v-if="project?.size">
            <q-icon
              :name="getProjectSizeIcon(project)"
              :color="getProjectSizeColor(project)"
              size="20px"
              class="q-mr-xs"
            >
              <q-tooltip>{{ $t(`work.sizeTooltips.${project.size}`) }}</q-tooltip>
            </q-icon>
            <span class="text-caption" :class="`text-${getProjectSizeColor(project)}`">{{
              $t(`work.sizes.${project.size}`)
            }}</span>
            <q-linear-progress
              :value="getSizeRating(project) / 3"
              :color="getProjectSizeColor(project)"
              class="q-ml-sm size-progress"
              size="6px"
              rounded
            />
          </div>
          <div class="size-indicator" v-else>
            <q-badge color="grey" text-color="white" class="q-py-xs">
              {{ $t('work.sizeNotSpecified') }}
              <q-tooltip>{{ $t('work.sizeNotSpecifiedTooltip') }}</q-tooltip>
            </q-badge>
          </div>
        </q-card-section>
        <q-card-actions align="right">
          <q-btn flat :label="$t('work.btnDetails')" color="primary" @click="openDialog(index)" />
        </q-card-actions>
      </q-card>
    </div>

    <!-- Project Details Dialog -->
    <q-dialog v-model="dialogVisible">
      <q-card style="width: 700px; max-width: 90vw" class="content-card content-card--flat">
        <q-card-section class="q-pb-none dialog-header">
          <div class="dialog-header-content">
            <div class="tag-chip q-mr-md">
              {{ selectedProject ? getProjectCategory(selectedProject) : '' }}
            </div>
            <div class="text-h6 project-title">
              {{ selectedProject ? selectedProject.title : '' }}
            </div>
          </div>
          <q-btn icon="close" flat round dense v-close-popup class="close-btn" />
        </q-card-section>

        <q-card-section v-if="selectedProject">
          <div class="text-subtitle2 q-mb-sm text-muted">{{ selectedProject?.tech || '' }}</div>
          <div class="text-body1 prose" v-html="selectedProject?.description || ''"></div>
        </q-card-section>

        <q-card-section
          class="q-pt-none"
          v-if="
            selectedProject && selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0
          "
        >
          <div class="text-subtitle1 q-mb-sm text-primary">{{ $t('work.keyFeatures') }}</div>
          <ul class="features-list">
            <li v-for="(feature, idx) in selectedProject.keyFeatures" :key="idx">
              <span class="text-weight-bold">{{ feature?.title || '' }}:</span>
              {{ feature?.desc || '' }}
            </li>
          </ul>
        </q-card-section>

        <q-card-section v-if="selectedProject && selectedProject.technologies">
          <div class="text-subtitle1 q-mb-sm text-primary">{{ $t('work.technologiesUsed') }}</div>
          <div class="prose">{{ selectedProject.technologies }}</div>
        </q-card-section>

        <q-card-section v-if="selectedProject">
          <div class="text-subtitle1 q-mb-sm text-primary">{{ $t('work.projectSize') }}</div>
          <div class="project-size" v-if="selectedProject.size">
            <q-icon
              :name="getProjectSizeIcon(selectedProject)"
              :color="getProjectSizeColor(selectedProject)"
              class="q-mr-sm"
            >
              <q-tooltip>{{ $t(`work.sizeTooltips.${selectedProject.size}`) }}</q-tooltip>
            </q-icon>
            <span class="text-caption" :class="`text-${getProjectSizeColor(selectedProject)}`">{{
              $t(`work.sizes.${selectedProject.size}`)
            }}</span>
            <q-linear-progress
              :value="getSizeRating(selectedProject) / 3"
              :color="getProjectSizeColor(selectedProject)"
              class="q-ml-sm size-progress"
              size="10px"
              rounded
            />
          </div>
          <div class="project-size" v-else>
            <q-badge color="grey" text-color="white" class="q-py-xs">
              {{ $t('work.sizeNotSpecified') }}
              <q-tooltip>{{ $t('work.sizeNotSpecifiedTooltip') }}</q-tooltip>
            </q-badge>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat :label="$t('work.btnClose')" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

enum ProjectSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

interface Feature {
  title: string;
  desc: string;
}

interface Project {
  title: string;
  tech: string;
  keywords: string;
  description: string;
  keyFeatures?: Feature[];
  technologies?: string;
  size?: ProjectSize | string;
}

const i18n = useI18n({ useScope: 'global' });

const localizedProjects = computed<Project[]>(() => i18n.tm('work.projects') ?? []);

const dialogVisible = ref(false);
const selectedProject = ref<Project | null>(null);

function openDialog(index: number) {
  const project = localizedProjects.value[index];
  if (project) {
    selectedProject.value = project;
    dialogVisible.value = true;
  }
}

function getProjectCategory(project: Project): string {
  const tech = project?.tech?.toLowerCase() || '';
  const keywords = project?.keywords?.toLowerCase() || '';

  if (tech.includes('qt') && (keywords.includes('scada') || keywords.includes('hmi'))) {
    return i18n.t('work.categories.softwareFramework');
  } else if (keywords.includes('data acquisition') || keywords.includes('archiving')) {
    return i18n.t('work.categories.dataSystems');
  } else if (keywords.includes('edge computing') || tech.includes('microservices')) {
    return i18n.t('work.categories.iotEdge');
  } else if (keywords.includes('api') || keywords.includes('rest')) {
    return i18n.t('work.categories.apiIntegration');
  } else if (keywords.includes('legacy') || keywords.includes('modernization')) {
    return i18n.t('work.categories.modernization');
  } else if (tech.includes('real-time')) {
    return i18n.t('work.categories.realTimeSystems');
  }

  return i18n.t('work.categories.industrialSolutions');
}

function getProjectSizeIcon(project: Project): string {
  const size = project?.size;
  if (size === ProjectSize.Large) return 'mdi-speedometer';
  if (size === ProjectSize.Medium) return 'mdi-speedometer-medium';
  if (size === ProjectSize.Small) return 'mdi-speedometer-slow';
  return 'mdi-help-circle-outline';
}

function getProjectSizeColor(project: Project): string {
  const size = project?.size;
  if (size === ProjectSize.Large) return 'red-6';
  if (size === ProjectSize.Medium) return 'amber-6';
  if (size === ProjectSize.Small) return 'green-6';
  return 'grey';
}

function getSizeRating(project: Project): number {
  const size = project?.size;
  if (size === ProjectSize.Large) return 3;
  if (size === ProjectSize.Medium) return 2;
  if (size === ProjectSize.Small) return 1;
  return 0;
}
</script>

<style scoped>
.size-indicator {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.size-progress {
  flex: 1;
  max-width: 120px;
  margin-left: 12px;
}

.project-size {
  display: flex;
  align-items: center;
}

.dialog-header {
  position: relative;
  padding-bottom: 16px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
}

.body--dark .dialog-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

.dialog-header-content {
  display: flex;
  align-items: center;
  padding-right: 36px;
}

.project-title {
  word-break: break-word;
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
}

.features-list li {
  margin-bottom: 8px;
  line-height: 1.5;
}

@media (max-width: 480px) {
  .dialog-header-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .dialog-header-content .tag-chip {
    margin-bottom: 8px;
  }
}
</style>
