import { useState, Fragment, useEffect } from "react";
import {
  Header,
  Modal,
  Card,
  Spacing,
  Cell,
  Loading,
  Text,
  Stack,
  Tiles,
  Inline,
  Column,
  Button,
  Input,
} from "@cornershop/cornponents";
import FocusTrap from "focus-trap-react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery, useQueryClient } from "react-query";

import { useNotification } from "../../components//Notification";

import Kitty from "../../components/Kitty";

import {
  getFavKitties,
  getKitties,
  favKitty,
  addKitty,
  unfavKitty,
} from "../../api/kitties";

const FavKitties = () => {
  const queries = useQueryClient();
  const { showNotification } = useNotification();
  const { mutateAsync: doUnfavKitty, isLoading: isDeleting } = useMutation(
    (id) => unfavKitty(id),
    {
      onSuccess: () => {
        queries.invalidateQueries(["fav-kitties"]);
      },
    }
  );

  const onKittyUnfaved = async (id) => {
    await doUnfavKitty(id);
    showNotification("Cat was removed from favorites");
  };

  const { data: kitties = [], isLoading, error } = useQuery(
    ["fav-kitties"],
    () => getFavKitties()
  );

  if (isLoading) {
    return (
      <Spacing py="large">
        <Loading size="large" />
      </Spacing>
    );
  }

  if (error) {
    return (
      <>
        <Text>Bad Kitty!!!!</Text>
        <Text>{error}</Text>
      </>
    );
  }

  if (kitties.length <= 0) {
    return (
      <Text color="black400" tabIndex="0">
        You do not have any favorite kitties yet
        <span role="img" aria-label="Sad" aria-hidden>
          😿
        </span>
      </Text>
    );
  }

  return (
    <Stack>
      {isDeleting && (
        <div role="alert" aria-label="Removing cat from favorites" />
      )}

      <Tiles columns="5-col" space="small">
        {kitties.map((kitty) => (
          <Kitty
            isFaved
            key={kitty.id}
            kitty={kitty}
            onToggleFav={() => onKittyUnfaved(kitty.id)}
          />
        ))}
      </Tiles>
    </Stack>
  );
};

const AllKitties = () => {
  const queries = useQueryClient();
  const { showNotification } = useNotification();
  const { mutateAsync: doFavKitty, isLoading: isAdding } = useMutation(
    (id) => favKitty(id),
    {
      onSuccess: () => {
        queries.invalidateQueries(["fav-kitties"]);
      },
    }
  );

  const onKittyFaved = async (id) => {
    await doFavKitty(id);
    showNotification("Cat added to favorites 😻");
  };

  const { data: kitties = [], isLoading, error, refetch } = useQuery(
    ["kitties"],
    () => getKitties(),
    {
      refetchOnWindowFocus: false,
    }
  );

  if (isLoading) {
    return (
      <Spacing py="large">
        <Loading size="large" />
      </Spacing>
    );
  }

  if (error) {
    return (
      <>
        <Text>Bad Kitty!!!!</Text>
        <Text>{error}</Text>
      </>
    );
  }

  if (kitties.length <= 0) {
    return (
      <Text>
        No kitties{" "}
        <span role="img" aria-label="Sad">
          😿 😿 😿
        </span>{" "}
      </Text>
    );
  }

  return (
    <Stack space="small">
      {isAdding && <div role="alert" aria-label="Adding cat to favorites" />}
      <Tiles columns="5-col">
        {kitties.map((kitty) => (
          <Fragment key={kitty.id}>
            <span role="alert" aria-label="New kitten displayed">
              <Kitty kitty={kitty} onToggleFav={() => onKittyFaved(kitty.id)} />
            </span>
          </Fragment>
        ))}
      </Tiles>
      <Inline>
        <Column width="content">
          <Button onClick={refetch}>Show another cat</Button>
        </Column>
      </Inline>
    </Stack>
  );
};

const Main = () => {
  const { showNotification } = useNotification();

  const { mutateAsync: doAddKitty, error } = useMutation((data) =>
    addKitty(data)
  );
  const kittyForm = useForm({
    defaultValues: {
      name: "",
      age: "",
    },
  });
  const [modal, setModal] = useState(false);

  const onSubmitKitten = async (data) => {
    try {
      await doAddKitty({
        ...data,
        image: data.image?.[0],
      });
      setModal(false);
      showNotification("New kitten added to the repository! Nice!");
    } catch {
      showNotification("Wah! Something went wrong");
    }
  };

  useEffect(() => {
    const handleEscape = (event) => {
      if (modal && event.key === "Escape") {
        setModal(false);
      }
    };
    window.addEventListener("keypress", handleEscape);
    return () => {
      window.removeEventListener("keypress", handleEscape);
    };
  }, [modal]);

  return (
    <main aria-label="Browse and favorite kittens">
      <FocusTrap active={modal}>
        <aside>
          <Modal render={modal} onBackgroundClick={() => setModal(false)}>
            <Card bordered>
              <Card.Header>New Kitty</Card.Header>
              <Card.Body>
                <form onSubmit={kittyForm.handleSubmit(onSubmitKitten)}>
                  <Stack space="small">
                    <Text as="label" htmlFor="name">
                      Name
                    </Text>
                    <Input
                      name="name"
                      type="text"
                      ref={kittyForm.register({ required: true })}
                    />
                    {kittyForm.errors?.name && (
                      <Text color="cornershop" size="xs">
                        {kittyForm.errors?.name?.message}
                      </Text>
                    )}
                    <Text as="label" htmlFor="age">
                      Age
                    </Text>
                    <Input
                      name="age"
                      type="number"
                      ref={kittyForm.register({ required: true })}
                    />
                    {kittyForm.errors?.age && (
                      <Text color="cornershop" size="xs">
                        {kittyForm.errors?.age?.message}
                      </Text>
                    )}
                    <Text as="label" htmlFor="image">
                      Image:
                    </Text>
                    <Input
                      name="image"
                      type="file"
                      ref={kittyForm.register({ required: true })}
                    />
                    {kittyForm.errors?.file && (
                      <Text color="cornershop" size="xs">
                        {kittyForm.errors?.file?.message}
                      </Text>
                    )}
                    {error && (
                      <Text
                        size="sm"
                        color="cornershop"
                        weight="medium"
                        role="alert"
                      >
                        <span role="img" aria-label="Error">
                          🚨
                        </span>{" "}
                        Could not upload kitten
                      </Text>
                    )}
                    <Inline align="right">
                      <Column width="content">
                        <Button type="submit" aria-label="Submit the cat">
                          Send
                        </Button>
                      </Column>
                    </Inline>
                  </Stack>
                </form>
              </Card.Body>
            </Card>
          </Modal>
        </aside>
      </FocusTrap>
      <Header appName="Cat browser 🐈" />
      <Spacing p="xxlarge">
        <Stack space="large">
          <Cell as="section">
            <Spacing p="large">
              <Spacing pb="small">
                <Text
                  as="h1"
                  tabIndex="0"
                  color="black"
                  size="lg"
                  weight="medium"
                  aria-label="Favorite Kitties. A list with the cats you have favorited  before"
                >
                  Favorite Kitties
                </Text>
              </Spacing>
              <FavKitties />
            </Spacing>
          </Cell>
          <Cell as="section" tabIndex="0">
            <Spacing p="large">
              <Spacing pb="small">
                <Inline>
                  <Column width="fluid">
                    <Text
                      as="h1"
                      tabIndex="0"
                      color="black"
                      size="lg"
                      weight="medium"
                      aria-label="A random kitty is shown and you can add it to your favorites"
                    >
                      Random Kitty
                    </Text>
                  </Column>
                  <Column width="content">
                    <Button
                      variant="secondary"
                      size="small"
                      onClick={() => setModal(true)}
                      aria-label="Add new cat. Upload a new picture to make it available for everyone"
                    >
                      Add new cat
                    </Button>
                  </Column>
                </Inline>
              </Spacing>
              <AllKitties />
            </Spacing>
          </Cell>
        </Stack>
      </Spacing>
    </main>
  );
};

export default Main;
