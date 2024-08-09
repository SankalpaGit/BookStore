from django.contrib import admin  # type: ignore
from .models import Books, Donation

# Register your models here.
admin.site.register(Books)

@admin.register(Donation)
class DonationAdmin(admin.ModelAdmin):
    list_display = ('name', 'author', 'published_Date', 'availability_status')
    actions = ['accept_donation', 'reject_donation']

    def has_add_permission(self, request):
        # Prevent the admin from adding new donations
        return False

    def has_change_permission(self, request, obj=None):
        # Allow changes only for actions, but not direct editing
        if obj is None:
            return True  # Allow change permissions for listing and actions
        return False

    def accept_donation(self, request, queryset):
        for donation in queryset:
            Books.objects.create(
                name=donation.name,
                author=donation.author,
                published_Date=donation.published_Date,
                description=donation.description,
                isAvailable=donation.isAvailable,
                ISBN=donation.ISBN,
                stock=donation.stock,
                booksImg=donation.booksImg
            )
            donation.delete()
        self.message_user(request, "Selected donations have been accepted and moved to Books.")

    def reject_donation(self, request, queryset):
        queryset.delete()
        self.message_user(request, "Selected donations have been rejected and deleted.")


