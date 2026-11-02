import { describe, it, expect } from 'vitest';
import en from '../src/i18n/en.json';
import es from '../src/i18n/es.json';
import compEn from '../src/content/competencies.en.json';
import compEs from '../src/content/competencies.es.json';
import modEn from '../src/content/modules.en.json';
import modEs from '../src/content/modules.es.json';

// Helper to recursively collect all dot-notation keys
function getDeepKeys(obj: Record<string, any>, prefix = ''): string[] {
  return Object.keys(obj).reduce((res: string[], el: string) => {
    const key = prefix ? `${prefix}.${el}` : el;
    if (typeof obj[el] === 'object' && obj[el] !== null && !Array.isArray(obj[el])) {
      res.push(...getDeepKeys(obj[el], key));
    } else {
      res.push(key);
    }
    return res;
  }, []);
}

describe('Internationalization (i18n) Parity & Integrity', () => {
  it('should have exact key parity between English and Spanish UI dictionaries', () => {
    const enKeys = getDeepKeys(en).sort();
    const esKeys = getDeepKeys(es).sort();

    // Check missing in Spanish
    const missingInEs = enKeys.filter((k) => !esKeys.includes(k));
    expect(missingInEs, `Keys missing in es.json: ${missingInEs.join(', ')}`).toEqual([]);

    // Check extra in Spanish
    const extraInEs = esKeys.filter((k) => !enKeys.includes(k));
    expect(extraInEs, `Extra unused keys in es.json: ${extraInEs.join(', ')}`).toEqual([]);
  });

  it('should have identical competency IDs between English and Spanish catalogs', () => {
    const enIds = compEn.map((c) => c.id).sort();
    const esIds = compEs.map((c) => c.id).sort();

    expect(enIds).toEqual(esIds);
    expect(compEn.length).toBeGreaterThan(0);
  });

  it('should have identical module IDs between English and Spanish catalogs', () => {
    const enModIds = modEn.map((m) => m.id).sort();
    const esModIds = modEs.map((m) => m.id).sort();

    expect(enModIds).toEqual(esModIds);
    expect(modEn.length).toBeGreaterThan(0);
  });
});
