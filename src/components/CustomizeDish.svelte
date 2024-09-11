<script>
  import {
    Badge,
    Button,
    Collapse,
    Form,
    FormGroup,
    Input,
  } from "@sveltestrap/sveltestrap";
  let isOpen = false;
</script>

<Button class="my-2" outline color="danger" on:click={() => (isOpen = !isOpen)}>
  Customize your own dish!
</Button>

<Collapse {isOpen}>
  <Form>
    <FormGroup floating label="Enter the name the dish">
      <Input placeholder="Enter a value" />
    </FormGroup>

    <FormGroup floating label="Select your protein source">
      <Input type="select" placeholder="Enter a value">
        <option />
        <option value="chicken">Chicken</option>
        <option value="beef">Beef</option>
        <option value="pork">Pork</option>
      </Input>
    </FormGroup>

    <!-- <FormGroup floating>
      <Input placeholder="Enter a value" />
      <div slot="label">
        Floating Label Slot <Badge>3</Badge>
      </div>
    </FormGroup> -->
  </Form></Collapse
>
