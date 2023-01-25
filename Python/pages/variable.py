class SuccessfulAnswer(object):

    def successful_answer(self):
        return "Your account was created successfully."
    
class UnsuccessfulAnswer(object):

    def empty_field(self):
        return f"{self} is required."

    def error_field(self):
        return "An internal error has occurred and has been logged."
