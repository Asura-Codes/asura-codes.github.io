<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated :class="$q.dark.isActive ? 'bg-grey-10 text-grey-2' : 'bg-grey-2 text-grey-10'">
      <q-toolbar>
        <q-btn flat dense round icon="menu" aria-label="Menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          {{ $t('common.portfolio') }}
        </q-toolbar-title>

        <q-btn-dropdown flat dense icon="translate" :label="$t('common.language')" auto-close>
          <q-list>
            <q-item clickable v-close-popup @click="changeLanguage('en-US')">
              <q-item-section>
                <q-item-label>{{ $t('common.languageEnglish') }}</q-item-label>
              </q-item-section>
              <q-item-section avatar v-if="locale === 'en-US'">
                <q-icon name="check" color="primary" />
              </q-item-section>
            </q-item>
            <q-item clickable v-close-popup @click="changeLanguage('pl-PL')">
              <q-item-section>
                <q-item-label>{{ $t('common.languagePolish') }}</q-item-label>
              </q-item-section>
              <q-item-section avatar v-if="locale === 'pl-PL'">
                <q-icon name="check" color="primary" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <q-btn flat dense round :icon="$q.dark.isActive ? 'dark_mode' : 'light_mode'" @click="toggleDarkMode"
          :aria-label="$t('common.darkMode')" class="q-ml-sm" />
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>{{ $t('nav.navigation') }}</q-item-label>
        <q-item clickable to="/" tag="router-link">
          <q-item-section avatar><q-icon name="home" /></q-item-section>
          <q-item-section>{{ $t('nav.home') }}</q-item-section>
        </q-item>
        <q-item clickable to="/github">
          <q-item-section avatar><q-icon name="mdi-github" /></q-item-section>
          <q-item-section>{{ $t('nav.github') }}</q-item-section>
        </q-item>
        <q-item clickable to="/work" tag="router-link">
          <q-item-section avatar><q-icon name="work" /></q-item-section>
          <q-item-section>{{ $t('nav.work') }}</q-item-section>
        </q-item>
        <q-item clickable to="/stack">
          <q-item-section avatar><q-icon name="layers" /></q-item-section>
          <q-item-section>{{ $t('nav.stack') }}</q-item-section>
        </q-item>
        <q-item clickable to="/contact">
          <q-item-section avatar><q-icon name="contact_mail" /></q-item-section>
          <q-item-section>{{ $t('nav.contact') }}</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer :class="$q.dark.isActive ? 'bg-grey-10 text-grey-2' : 'bg-grey-2 text-grey-8'" class="q-pa-sm">
      <div class="row items-center justify-between">
        <div>
          {{ $t('footer.builtWith', { version: $q.version }) }}
        </div>
        <div>
          {{ $t('footer.stackTech') }}
        </div>
      </div>
    </q-footer>
  </q-layout>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

const $q = useQuasar();
const { locale } = useI18n({ useScope: 'global' });
const leftDrawerOpen = ref(false);

// Enable dark mode by default unless user has set a preference
if (localStorage.getItem('darkMode') === null) {
  $q.dark.set(true);
  localStorage.setItem('darkMode', 'true');
} else {
  $q.dark.set(localStorage.getItem('darkMode') === 'true');
}

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}

function toggleDarkMode() {
  $q.dark.set(!$q.dark.isActive);
  localStorage.setItem('darkMode', $q.dark.isActive ? 'true' : 'false');
}

function changeLanguage(lang: string) {
  // Set the new language
  locale.value = lang;
  // Store the language preference in localStorage to persist it
  localStorage.setItem('language', locale.value);
}

// Initialize language from localStorage if available
const savedLanguage = localStorage.getItem('language');
if (savedLanguage && (savedLanguage === 'en-US' || savedLanguage === 'pl-PL')) {
  locale.value = savedLanguage;
}
</script>
