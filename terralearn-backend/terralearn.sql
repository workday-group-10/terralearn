\echo 'Delete and recreate terralearn database?'
\prompt 'Return for yes or control-C to cancel > ' answer
DROP DATABASE terralearn;
CREATE DATABASE terralearn;
\connect terralearn;

\i terralearn_schema.sql