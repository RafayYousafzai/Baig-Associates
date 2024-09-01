"use client";
import {
  Group,
  Divider,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconPhone,
} from "@tabler/icons-react";
import classes from "./HeaderMenu.module.css";
import Link from "next/link";
import { Flex } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MailOutlineRoundedIcon from "@mui/icons-material/MailOutlineRounded";
import { navLinks, adminLinks } from "./HeaderLinks";

export default function HeaderMenu({ admin }) {
  const nav = useRouter();

  const push = (url) => {
    nav.push(url);
  };

  const links = admin ? adminLinks : navLinks;

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box style={{ overflow: "hidden", position: "relative" }}>
      {!admin ? (
        <>
          <Flex
            bg="#edf6f9"
            alignItems="center"
            justifyContent="space-between"
            m={0}
            p={0}
            // textTransform="uppercase"
          >
            <Flex alignItems="center" px={1}>
              <Link
                href="https://www.facebook.com/albashirwelfare"
                target="_blank"
                rel="noopener noreferrer"
                _hover={{ textDecoration: "none" }}
              >
                <IconBrandFacebook size={20} color="#3b5998" />
              </Link>
              <Link
                href="https://www.instagram.com/albashirwelfare/?hl=en"
                target="_blank"
                rel="noopener noreferrer"
                ml="1rem"
                _hover={{ textDecoration: "none" }}
              >
                <IconBrandInstagram
                  size={25}
                  style={{ padding: "2px" }}
                  color="#e4405f"
                />
              </Link>
              <Link
                href="mailto:baigassociates@gmail.com"
                ml="1rem"
                style={{
                  color: "#0b090a",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: ".8rem",
                }}
              >
                <MailOutlineRoundedIcon
                  style={{
                    color: "#0b090a",
                    fontSize: "21px",
                    marginRight: "1rem",
                  }}
                  color="#fff"
                />
                baigassociates@gmail.com
              </Link>
            </Flex>
            {/* Phone Icon */}
            <Flex
              alignItems="center"
              px={1}
              style={{
                backgroundColor: "#83c5be",
                height: "2rem",
                borderBottomLeftRadius: 15,
              }}
            >
              <IconPhone size={22} style={{ padding: "2px" }} color="#0b090a" />
              {/* Uncomment the following lines if you want to add a phone link */}
              <Link
                href="tel:+92 333 5593694"
                style={{ color: "#0b090a", fontSize: ".7rem" }}
                ml="0.5rem"
              >
                +92 333 5593694
              </Link>
            </Flex>
          </Flex>
        </>
      ) : null}

      <header className={classes.header}>
        <Group justify="space-between" h="100%">
          <Link href="/" style={{ width: "12rem" }}>
            <Image
              src="/logo.png"
              width={700}
              height={700}
              alt="logo"
              style={{
                zIndex: 999,
                position: "absolute",
                top: !admin ? 30 : 0,
                width: "auto",
                height: "5rem",
                filter: "brightness(0) invert(1) grayscale(1)",
              }}
            />
          </Link>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Burger
              opened={drawerOpened}
              onClick={toggleDrawer}
              hiddenFrom="sm"
              color={"#fff"}
            />
          </div>
          <Group h="100%" gap={0} visibleFrom="sm">
            {links.map((link, index) => (
              <Link
                key={index}
                href={link.href}
                style={{ color: "#edf6f9" }}
                className={classes.link}
              >
                {link.label}
              </Link>
            ))}
          </Group>
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="ALBASHIR"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h={`calc(90vh - ${rem(80)})`} mx="-md">
          <Divider my="sm" />

          {links.map((link, index) => (
            <Link key={index} href={link.href} className={classes.link}>
              {link.label}
            </Link>
          ))}
        </ScrollArea>
        <Divider my="sm" />
      </Drawer>
      {!admin ? (
        <Flex
          alignItems="center"
          justifyContent={"center"}
          p={1}
          bgColor={"#edf6f9"}
        >
          <Link
            href="/Construction"
            rel="noopener noreferrer"
            _hover={{ textDecoration: "none" }}
            style={{ fontWeight: "900", color: "#000" }}
          >
            Start Construction Now
          </Link>
        </Flex>
      ) : null}
    </Box>
  );
}
