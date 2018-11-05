import Dexie from 'dexie';
import Snippet from './models/snippet';

const db = new Dexie('context');

db.version(1).stores({
    snippets: 'id++keyPath, name, shortcut, language'
});

db.snippets.mapToClass(Snippet);

export default db;