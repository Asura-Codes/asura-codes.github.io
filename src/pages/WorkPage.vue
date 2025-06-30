<template>
  <q-page class="column items-center q-pa-md">
    <div class="text-center q-mb-xl">
      <div class="text-h3 q-mb-sm text-weight-bold">{{ $t('work.pageTitle') }}</div>
      <div class="text-subtitle1 q-mb-lg text-grey-7 q-dark:text-grey-3">{{ $t('work.pageSubtitle') }}</div>
    </div>
    <div class="projects-grid">
      <!-- Project Cards -->
      <q-card v-for="(project, index) in localizedProjects" :key="index" class="my-card">
        <q-card-section>
          <div class="category-tag">{{ getProjectCategory(project) }}</div>
          <div class="text-h6">{{ project?.title || '' }}</div>
          <div class="text-caption q-mb-sm text-grey-7 q-dark:text-grey-4">{{ project?.tech || '' }}</div>
          <q-separator class="q-my-sm" />
          <div class="keywords q-mb-sm">{{ project?.keywords || '' }}</div>
          <div class="size-indicator" v-if="project?.size">
            <q-icon :name="getProjectSizeIcon(project)" :color="getProjectSizeColor(project)" size="20px"
              class="q-mr-xs">
              <q-tooltip>{{ $t(`work.sizeTooltips.${project.size}`) }}</q-tooltip>
            </q-icon>
            <span class="text-caption" :class="`text-${getProjectSizeColor(project)}`">{{
              $t(`work.sizes.${project.size}`) }}</span>
            <q-linear-progress :value="getSizeRating(project) / 3" :color="getProjectSizeColor(project)"
              class="q-ml-sm size-progress-card" size="6px" rounded />
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
      <q-card style="width: 700px; max-width: 90vw" class="project-dialog">
        <q-card-section class="q-pb-none dialog-header">
          <div class="dialog-header-content">
            <div class="category-tag q-mr-md">{{ selectedProject ?
              getProjectCategory(selectedProject) : '' }}</div>
            <div class="text-h6 project-title">{{ selectedProject ? selectedProject.title : '' }}</div>
          </div>
          <q-btn icon="close" flat round dense v-close-popup class="close-btn" />
        </q-card-section>

        <q-card-section v-if="selectedProject">
          <div class="text-subtitle2 q-mb-sm tech-list">{{ selectedProject?.tech || '' }}</div>
          <div class="text-body1 description" v-html="selectedProject?.description || ''"></div>
        </q-card-section>

        <q-card-section class="q-pt-none"
          v-if="selectedProject && selectedProject.keyFeatures && selectedProject.keyFeatures.length > 0">
          <div class="text-subtitle1 q-mb-sm section-title">{{ $t('work.keyFeatures') }}</div>
          <ul class="features-list">
            <li v-for="(feature, idx) in selectedProject.keyFeatures" :key="idx">
              <span class="text-weight-bold">{{ feature?.title || '' }}:</span> {{ feature?.desc || '' }}
            </li>
          </ul>
        </q-card-section>

        <q-card-section v-if="selectedProject && selectedProject.technologies">
          <div class="text-subtitle1 q-mb-sm section-title">{{ $t('work.technologiesUsed') }}</div>
          <div class="tech-tags">{{ selectedProject.technologies }}</div>
        </q-card-section>

        <q-card-section v-if="selectedProject">
          <div class="text-subtitle1 q-mb-sm section-title">{{ $t('work.projectSize') }}</div>
          <div class="project-size" v-if="selectedProject.size">
            <q-icon :name="getProjectSizeIcon(selectedProject)" :color="getProjectSizeColor(selectedProject)"
              class="q-mr-sm">
              <q-tooltip>{{ $t(`work.sizeTooltips.${selectedProject.size}`) }}</q-tooltip>
            </q-icon>
            <span class="text-caption" :class="`text-${getProjectSizeColor(selectedProject)}`">{{
              $t(`work.sizes.${selectedProject.size}`) }}</span>
            <q-rating :model-value="getSizeRating(selectedProject)" size="1.2em" :max="3" icon="mdi-circle"
              icon-selected="mdi-circle" readonly color="grey-6" :color-selected="getProjectSizeColor(selectedProject)"
              class="q-ml-md" style="min-width: 58px;">
              <q-tooltip>{{ $t('work.difficultyScale') }}</q-tooltip>
            </q-rating>

            <!-- Progress bar visualization -->
            <q-linear-progress :value="getSizeRating(selectedProject) / 3" :color="getProjectSizeColor(selectedProject)"
              class="q-mt-sm size-progress" size="10px" rounded />
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

// Project size enum
enum ProjectSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small'
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

// Setup i18n
const { t } = useI18n({ useScope: 'global' });

// Get projects from i18n
const localizedProjects = computed<Project[]>(() => {
  const locale = useI18n().locale.value;
  const messages = useI18n().messages.value;

  // Check if the messages and the work projects exist for the current locale
  if (messages && messages[locale] && messages[locale].work && Array.isArray(messages[locale].work.projects)) {
    return messages[locale].work.projects as Project[];
  }
  // Fallback to empty array if the projects are not found
  return [];
});

const dialogVisible = ref(false);
const selectedProject = ref<Project | null>(null);

function openDialog(index: number) {
  const project = localizedProjects.value[index];
  if (project) {
    selectedProject.value = project;
    dialogVisible.value = true;
  }
}

// Function to determine project category based on keywords and tech
function getProjectCategory(project: Project): string {
  const tech = project?.tech?.toLowerCase() || '';
  const keywords = project?.keywords?.toLowerCase() || '';

  if (tech.includes('qt') && (keywords.includes('scada') || keywords.includes('hmi'))) {
    return t('work.categories.softwareFramework');
  } else if (keywords.includes('data acquisition') || keywords.includes('archiving')) {
    return t('work.categories.dataSystems');
  } else if (keywords.includes('edge computing') || tech.includes('microservices')) {
    return t('work.categories.iotEdge');
  } else if (keywords.includes('api') || keywords.includes('rest')) {
    return t('work.categories.apiIntegration');
  } else if (keywords.includes('legacy') || keywords.includes('modernization')) {
    return t('work.categories.modernization');
  } else if (tech.includes('real-time')) {
    return t('work.categories.realTimeSystems');
  }

  return t('work.categories.industrialSolutions');
}

// Function to get the project size icon
function getProjectSizeIcon(project: Project): string {
  const size = project?.size;

  if (size === ProjectSize.Large) {
    return 'mdi-speedometer';
  } else if (size === ProjectSize.Medium) {
    return 'mdi-speedometer-medium';
  } else if (size === ProjectSize.Small) {
    return 'mdi-speedometer-slow';
  }

  return 'mdi-help-circle-outline'; // Default icon if size is undefined
}

// Function to get the project size color
function getProjectSizeColor(project: Project): string {
  const size = project?.size;

  if (size === ProjectSize.Large) {
    return 'red-6';
  } else if (size === ProjectSize.Medium) {
    return 'amber-6';
  } else if (size === ProjectSize.Small) {
    return 'green-6';
  }

  return 'grey'; // Default color if size is undefined
}

// Function to get rating value from project size
function getSizeRating(project: Project): number {
  const size = project?.size;

  if (size === ProjectSize.Large) {
    return 3;
  } else if (size === ProjectSize.Medium) {
    return 2;
  } else if (size === ProjectSize.Small) {
    return 1;
  }

  return 0; // Default if size is undefined
}
</script>

<style scoped>
.projects-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  max-width: 1200px;
  margin: 0 auto;
}

.my-card {
  width: 320px;
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  background: #fff;
  color: #23272f;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-top: 3px solid #1976d2;
  transition: box-shadow 0.2s, transform 0.2s;
}

.my-card:hover {
  box-shadow: 0 4px 16px rgba(25, 118, 210, 0.10);
  transform: translateY(-2px) scale(1.01);
}

.body--dark .my-card {
  background: #23272f;
  color: #e3f2fd;
  border-top: 3px solid #90caf9;
  box-shadow: 0 2px 8px rgba(144, 202, 249, 0.08);
}

.category-tag {
  background: #e3f2fd;
  color: #1976d2;
  font-size: 0.85rem;
  font-weight: 600;
  padding: 4px 12px;
  border-radius: 4px;
  display: inline-block;
  margin-bottom: 10px;
}

.body--dark .category-tag {
  background: #1565c0;
  color: #bbdefb;
}

.keywords {
  font-size: 0.9rem;
  color: #607d8b;
  line-height: 1.4;
}

.body--dark .keywords {
  color: #b0bec5;
}

.project-dialog {
  border-radius: 10px;
  background: #fff;
  color: #23272f;
}

.body--dark .project-dialog {
  background: #23272f;
  color: #e3f2fd;
}

.dialog-header {
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  padding-bottom: 16px;
  position: relative;
}

.dialog-header-content {
  display: flex;
  align-items: center;
  padding-right: 36px;
  /* Make space for close button */
}

.project-title {
  word-break: break-word;
  /* Handle long titles gracefully */
}

.close-btn {
  position: absolute;
  top: 8px;
  right: 8px;
}

.body--dark .dialog-header {
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
}

/* Improve dialog header on mobile devices */
@media (max-width: 480px) {
  .dialog-header-content {
    flex-direction: column;
    align-items: flex-start;
  }

  .dialog-header-content .category-tag {
    margin-bottom: 8px;
  }

  .project-title {
    width: 100%;
    padding-right: 4px;
  }
}

.section-title {
  color: #1976d2;
  font-weight: 500;
}

.body--dark .section-title {
  color: #90caf9;
}

.features-list li {
  margin-bottom: 8px;
}

.tech-list {
  color: #555;
  font-weight: 500;
}

.body--dark .tech-list {
  color: #b0bec5;
}

.tech-tags {
  line-height: 1.6;
}

.body--dark .tech-tags {
  color: #b0bec5;
}

.project-size {
  color: #555;
  font-weight: 500;
  padding: 4px 0;
  display: flex;
  align-items: center;
}

.body--dark .project-size {
  color: #b0bec5;
}

.description {
  line-height: 1.6;
}

.body--dark .description {
  color: #e0e0e0;
}

.size-indicator {
  display: flex;
  align-items: center;
  margin-top: 8px;
}

.size-indicator .text-caption {
  font-weight: 500;
}

.size-progress {
  /* width: 100px; */
  margin-left: 12px;
}

.size-progress-card {
  align-self: center;
}

/* Add animation to progress bars */
.size-progress,
.size-progress-card {
  transition: width 0.5s ease-in-out, transform 0.5s ease;
}

.size-progress:hover,
.size-progress-card:hover {
  transform: scaleY(1.2);
}

/* Add subtle animation to the size indicator when hovered */
.size-indicator {
  transition: all 0.3s ease;
}

.size-indicator:hover .q-icon {
  transform: scale(1.2);
  transition: transform 0.3s ease;
}
</style>
