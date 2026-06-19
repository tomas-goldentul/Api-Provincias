--
-- PostgreSQL database dump
--

-- Dumped from database version 16.2
-- Dumped by pg_dump version 16.0

-- Started on 2026-06-19 08:50:59

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 4 (class 2615 OID 2200)
-- Name: public; Type: SCHEMA; Schema: -; Owner: pg_database_owner
--

CREATE SCHEMA public;


ALTER SCHEMA public OWNER TO pg_database_owner;

--
-- TOC entry 4786 (class 0 OID 0)
-- Dependencies: 4
-- Name: SCHEMA public; Type: COMMENT; Schema: -; Owner: pg_database_owner
--

COMMENT ON SCHEMA public IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 215 (class 1259 OID 16404)
-- Name: Provinces; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."Provinces" (
    id integer NOT NULL,
    name character varying,
    full_name character varying,
    latitude numeric,
    longitude numeric,
    display_order integer NOT NULL
);


ALTER TABLE public."Provinces" OWNER TO postgres;

--
-- TOC entry 216 (class 1259 OID 16411)
-- Name: Provinces_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."Provinces" ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."Provinces_id_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 4779 (class 0 OID 16404)
-- Dependencies: 215
-- Data for Name: Provinces; Type: TABLE DATA; Schema: public; Owner: postgres
--

INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (1, 'Buenos Aires', 'Provincia de Buenos Aires', -36.676944, -60.558889, 1);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (2, 'Catamarca', 'Provincia de Catamarca', -27.266667, -66.933333, 2);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (3, 'Chaco', 'Provincia del Chaco', -26.333333, -60.75, 3);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (4, 'Chubut', 'Provincia del Chubut', -43.75, -68.5, 4);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (5, 'Ciudad Autónoma de Buenos Aires', 'Ciudad Autónoma de Buenos Aires', -34.603722, -58.381592, 5);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (6, 'Córdoba', 'Provincia de Córdoba', -32.166667, -63.75, 6);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (7, 'Corrientes', 'Provincia de Corrientes', -28.666667, -57.75, 7);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (8, 'Entre Ríos', 'Provincia de Entre Ríos', -32.083333, -59.25, 8);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (9, 'Formosa', 'Provincia de Formosa', -24.833333, -59.833333, 9);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (10, 'Jujuy', 'Provincia de Jujuy', -23.25, -65.5, 10);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (11, 'La Pampa', 'Provincia de La Pampa', -37.166667, -65.416667, 11);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (12, 'La Rioja', 'Provincia de La Rioja', -29.5, -67.25, 12);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (13, 'Mendoza', 'Provincia de Mendoza', -34.5, -68.5, 13);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (14, 'Misiones', 'Provincia de Misiones', -26.833333, -54.5, 14);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (15, 'Neuquén', 'Provincia del Neuquén', -38.5, -70.25, 15);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (16, 'Río Negro', 'Provincia de Río Negro', -40.666667, -67.25, 16);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (17, 'Salta', 'Provincia de Salta', -24.783333, -65.416667, 17);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (18, 'San Juan', 'Provincia de San Juan', -30.916667, -68.966667, 18);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (19, 'San Luis', 'Provincia de San Luis', -33.75, -66.0, 19);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (20, 'Santa Cruz', 'Provincia de Santa Cruz', -48.833333, -69.833333, 20);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (21, 'Santa Fe', 'Provincia de Santa Fe', -30.75, -61.25, 21);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (22, 'Santiago del Estero', 'Provincia de Santiago del Estero', -27.783333, -63.25, 22);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (23, 'Tierra del Fuego', 'Provincia de Tierra del Fuego, Antártida e Islas del Atlántico Sur', -54.5, -67.0, 23);
INSERT INTO public."Provinces" OVERRIDING SYSTEM VALUE VALUES (24, 'Tucumán', 'Provincia de Tucumán', -26.916667, -65.25, 24);


--
-- TOC entry 4787 (class 0 OID 0)
-- Dependencies: 216
-- Name: Provinces_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."Provinces_id_seq"', 24, true);


--
-- TOC entry 4635 (class 2606 OID 16410)
-- Name: Provinces Provinces_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."Provinces"
    ADD CONSTRAINT "Provinces_pkey" PRIMARY KEY (id);


-- Completed on 2026-06-19 08:50:59

--
-- PostgreSQL database dump complete
--

