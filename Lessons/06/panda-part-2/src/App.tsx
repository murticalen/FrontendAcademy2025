import { useEffect, useState } from "react"
import { TeamPlayer } from "./interface"
import { playerImage, teamPlayers } from "./routes"
import { Container, Flex } from "../styled-system/jsx"
import { styled } from "../styled-system/jsx"

const calculateAge = (dateOfBirthTimestamp: number) => {
  const birthday = new Date(dateOfBirthTimestamp)
  const ageDifMs = Date.now() - birthday.getTime()
  const ageDate = new Date(ageDifMs)

  return Math.abs(ageDate.getUTCFullYear() - 1970)
}

// Same thing as styled.button, but allows us to
// extract the component
const StyledButton = styled("button", {
  base: {
    backgroundColor: "primary.default",
    cursor: "pointer",
    border: "none",
    fontSize: "sm",
    borderRadius: "sm",
    padding: "sm",
    color: "surface.s0",
  },
})

function App() {
  const [players, setPlayers] = useState<TeamPlayer[]>([])

  const toggleTheme = () => {
    // This is the attribute we defined in the panda.config.ts,
    // you can name it however you want
    const key = "data-theme"
    const theme = document.documentElement.getAttribute(key)

    // There is no light theme since we didn't explicitly define one,
    // so we will just use empty string instead
    document.documentElement.setAttribute(key, theme === "" ? "dark" : "")
  }

  useEffect(() => {
    fetch(teamPlayers(1))
      .then((res) => res.json())
      .then((data) => setPlayers(data.players))
  }, [])

  return (
    <Container background="surface.s0" maxW="792px" p="lg!">
      <StyledButton onClick={toggleTheme}>Toggle theme</StyledButton>
      <Flex direction="column" gap="0px">
        {players.map(({ player }) => {
          return (
            <Flex key={player.id} gap="lg" py="sm" px="lg">
              <styled.img
                src={playerImage(player.id)}
                alt={player.name}
                w="40px"
                h="40px"
                borderRadius="50%"
                border="1px solid {colors.neutrals.nLv4}"
              />

              <Flex direction="column" gap="xs">
                <styled.p textStyle="body.medium" color="neutrals.nLv1">
                  {player.jerseyNumber} {player.name}
                </styled.p>

                <Flex gap="sm" alignItems="center">
                  <styled.span
                    textStyle="assistive.default"
                    color="neutrals.nLv3"
                  >
                    {calculateAge(player.dateOfBirthTimestamp! * 1000)} yrs
                  </styled.span>

                  <styled.img
                    src={`/flags/${player.country?.alpha2?.toLowerCase()}.png`}
                    w="lg"
                    h="lg"
                    borderRadius="50%"
                  />

                  <styled.span
                    textStyle="assistive.default"
                    color="neutrals.nLv3"
                  >
                    {player.country?.alpha3}
                  </styled.span>

                  <styled.span
                    display={["none", "inline"]}
                    textStyle="assistive.default"
                    color="neutrals.nLv3"
                  >
                    {player.position}
                  </styled.span>
                </Flex>
              </Flex>
            </Flex>
          )
        })}
      </Flex>
    </Container>
  )
}

export default App
