import { create } from 'zustand'

// Определяем типы для настроек
export type CodeMode = 'base' | 'advanced'
export type ThemeMode = 'light' | 'dark'

interface AppSettings {
  theme?: ThemeMode
  codeMode?: CodeMode
  // Добавим другие настройки по мере необходимости
}

interface SettingsStore {
  settings: AppSettings
  setSetting: <K extends keyof AppSettings>(key: K, value: AppSettings[K]) => void
  getSetting: <K extends keyof AppSettings>(key: K, defaultValue: AppSettings[K]) => AppSettings[K]
}

// Создаем хранилище с помощью zustand
export const useSettings = create<SettingsStore>((set, get) => ({
  settings: loadSettingsFromStorage(),
  
  setSetting: (key, value) => {
    set((state) => {
      const newSettings = { ...state.settings, [key]: value }
      localStorage.setItem('appSettings', JSON.stringify(newSettings))
      return { settings: newSettings }
    })
  },
  
  getSetting: (key, defaultValue) => {
    return get().settings[key] ?? defaultValue
  },
}))

// Вспомогательная функция для загрузки настроек из localStorage
function loadSettingsFromStorage(): AppSettings {
  if (typeof window === 'undefined') return {}
  
  const stored = localStorage.getItem('appSettings')
  return stored ? JSON.parse(stored) : {}
} 