<template>
  <q-page class="page-container">
    <div class="page-header">
      <div class="page-title">{{ $t('stack.pageTitle') }}</div>
      <p class="page-subtitle">{{ $t('stack.introduction') }}</p>
    </div>

    <q-card v-for="card in skillCards" :key="card.id" class="content-card q-mb-lg">
      <q-card-section>
        <div class="text-h6 text-primary q-mb-md">{{ card.title }}</div>
        <ul class="skill-list">
          <li v-for="skill in card.skills" :key="skill.id">
            <div>
              <strong>{{ skill.name }}</strong>
              <template v-if="skill.description"> – {{ skill.description }}</template>
            </div>
            <ul v-if="skill.subSkills && skill.subSkills.length > 0" class="subskill-list">
              <li v-for="subskill in skill.subSkills" :key="subskill.id">
                <strong>{{ subskill.name }}</strong> – {{ subskill.description }}
              </li>
            </ul>
          </li>
        </ul>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';

const i18n = useI18n({ useScope: 'global' });

interface Subskill {
  id: string;
  name: string;
  description: string;
}

interface Skill {
  id: string;
  name: string;
  description: string;
  subSkills?: Subskill[];
}

interface SkillCard {
  id: string;
  title: string;
  skills: Skill[];
}

const skillCards = computed<SkillCard[]>(() => i18n.tm('stack.skillCards') ?? []);
</script>

<style scoped>
.skill-list {
  padding-left: 1.1em;
}

.skill-list > li {
  margin-bottom: 0.6em;
  line-height: 1.5;
}

.subskill-list {
  padding-left: 1.2em;
  margin-top: 0.3em;
}

.subskill-list > li {
  margin-bottom: 0.3em;
}
</style>
