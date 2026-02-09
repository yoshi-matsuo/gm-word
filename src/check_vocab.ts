import { vocabulary, levelLabels, levelDescriptions } from './data/vocabulary';

console.log('--- VOCABULARY CHECK ---');
console.log(`Total words: ${vocabulary.length}`);

const counts: Record<string, number> = { low: 0, middle: 0, high: 0 };
const ids = new Set<number>();
const words = new Set<string>();
let errors = 0;

vocabulary.forEach((w, index) => {
    // Check Level
    if (counts[w.level] !== undefined) {
        counts[w.level]++;
    } else {
        console.error(`[ERROR] Unknown level at index ${index} (ID: ${w.id}): "${w.level}"`);
        errors++;
    }

    // Check ID Uniqueness
    if (ids.has(w.id)) {
        console.error(`[ERROR] Duplicate ID found: ${w.id} (Word: ${w.word})`);
        errors++;
    }
    ids.add(w.id);

    // Check Word Content
    if (!w.word) {
        console.error(`[ERROR] Missing word at index ${index} (ID: ${w.id})`);
        errors++;
    }

    // Check Phonetic
    if (!w.phonetic) {
        console.warn(`[WARN] Missing phonetic for word: ${w.word} (ID: ${w.id})`);
    }

    // Check Meaning
    if (!w.meaning) {
        console.error(`[ERROR] Missing meaning for word: ${w.word} (ID: ${w.id})`);
        errors++;
    }

    // Check Examples (at least one example)
    if (!w.examples || w.examples.length === 0) {
        console.warn(`[WARN] No examples for word: ${w.word} (ID: ${w.id})`);
    }

    words.add(w.word);
});

console.log('Counts per level:', counts);
console.log(`Unique IDs: ${ids.size}`);
console.log(`Unique Words: ${words.size}`);

if (words.size < vocabulary.length) {
    console.log('\n[INFO] Found duplicate words (same spelling, different ID/entry):');
    const wordCounts: Record<string, number> = {};
    vocabulary.forEach(w => {
        wordCounts[w.word] = (wordCounts[w.word] || 0) + 1;
    });

    Object.entries(wordCounts).forEach(([word, count]) => {
        if (count > 1) {
            const entries = vocabulary.filter(v => v.word === word);
            console.log(`- "${word}" appears ${count} times:`);
            entries.forEach(e => console.log(`  ID: ${e.id}, Level: ${e.level}, Meaning: ${e.meaning}`));
        }
    });
}
