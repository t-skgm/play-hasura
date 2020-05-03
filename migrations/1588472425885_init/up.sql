CREATE TABLE public.todos (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    title text DEFAULT '""'::text NOT NULL,
    "completedAt" time with time zone,
    user_id uuid NOT NULL
);
CREATE TABLE public.users (
    id uuid DEFAULT public.gen_random_uuid() NOT NULL,
    name text NOT NULL
);
ALTER TABLE ONLY public.todos
    ADD CONSTRAINT todo_pkey PRIMARY KEY (id);
ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pkey PRIMARY KEY (id);
