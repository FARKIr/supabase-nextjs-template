# SQL Súbory - Slovenské Názvy v Pôvodných Súboroch

## Nový prístup

**Slovenské názvy sa používajú priamo v pôvodných SQL súboroch** namiesto vytvárania oddelených SK verzií. Tento prístup je čistejší a vyžaduje menej súborov.

## Prehľad zmien

Všetky SQL migračné súbory teraz používajú slovenské názvy pre používateľské prvky.

## Súbory aktualizované

### 1. `20250130165844_example_storage.sql`
- **Zmena:** Názov bucket z `'files'` na `'files'`

### 2. `20250130181110_storage_policies.sql`
- **Zmena:** Názvy politík z angličtiny do slovenčiny
- **Zmena:** Referencia na `'files'` bucket zmenená na `'files'`
- **Zmena:** Funkcia `is_user_authenticated()` zmenená na `is_user_authenticated()`

### 3. `20250130181641_todo_list.sql`
- **Zmena:** Názov tabuľky z `"todo_list"` na `"zoznam_uloh"`
- **Zmena:** Názov indexu z `todo_list_pkey` na `zoznam_uloh_pkey`
- **Zmena:** Názov constraint z `todo_list_owner_fkey` na `zoznam_uloh_owner_fkey`
- **Zmena:** Názov politiky z `"Owner can do everything"` na `"Vlastník môže robiť všetko"`
- **Zmena:** Funkcia `is_user_authenticated()` zmenená na `is_user_authenticated()`

### 4. `20250107210416_MFA.sql`
- **Zmena:** Názov funkcie z `is_user_authenticated()` na `is_user_authenticated()`

## Potrebné zmeny v kóde

### 1. Supabase konfigurácia
V `supabase/config.toml` je potrebné aktualizovať:

```toml
[storage.buckets.files]
name = "files"
```

### 2. Aplikácia - Storage
V kóde aplikácie je potrebné podporiť slovenské názvy:

```typescript
// Súčasné
const bucketName = 'files';

// Slovenské
const bucketName = 'files';
```

### 3. Aplikácia - Todo List
V kóde aplikácie je potrebné podporiť slovenské názvy tabuľky:

```typescript
// Súčasné
const { data, error } = await supabase
  .from('todo_list')
  .select('*');

// Slovenské
const { data, error } = await supabase
  .from('zoznam_uloh')
  .select('*');
```

### 4. Environment konfigurácia
V `.env.local.template.sk`:

```env
# Slovenské názvy
NEXT_PUBLIC_STORAGE_BUCKET=files
NEXT_PUBLIC_TODO_TABLE=zoznam_uloh
